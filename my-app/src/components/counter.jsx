import React, { useState } from "react"

const Counter = () => {
  let [count, setCount] = useState(0)
  let [tags, setTags] = useState([`tag1`, `tag2`, `tag3`])

  const formatCount = () => {
    return count === 0 ? "empty" : count
  }

  const getBadgeClasses = () => {
    let classes = `badge m-2 `
    classes += count === 0 ? `bg-warning` : `bg-primary`
    return classes
  }

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)

    console.log(count)
  }

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1)
    console.log(count)
  }

  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id))
  }

  const renderTags = () => {
    return (
      tags.length !== 0 &&
      tags.map((tag) => (
        <li key={tag} className="btn btn-primary btn-sm m-1" onClick={() => handleTagChange(tag)}>
          {tag}
        </li>
      ))
    )
  }

  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>
  }
  return (
    <>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-1" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-1" onClick={handleDecrement}>
        -
      </button>
    </>
  )
}

export default Counter
