import React, { useState } from "react"
import api from "../api"

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((name) => name !== userId))
  }

  const handlePhrase = (number) => {
    number = users.length
    let word
    number > 1 ? (word = "тусанут") : (word = "тусанёт")

    let people = `человек`

    if (number % 10 >= 2 && number % 10 <= 4) {
      people = `человека`
    }
    if ((number >= 11 && number <= 14) || (number % 100 >= 12 && number % 100 <= 14)) {
      people = `человек`
    }

    const getClasses = () => {
      let classes = "badge"
      !number ? (classes += " bg-danger") : (classes += ` bg-primary`)
      return classes
    }

    let span = (
      <span className={getClasses()}>
        {number} {people} {word} с тобой сегодня
      </span>
    )

    return span
  }

  const headRow = () => {
    const headArr = [`Имя`, `Качества`, `Профессия`, `Встретился, раз`, `Оценка`]
    return headArr.map((title) => <th key={title}>{title}</th>)
  }

  const getBadges = (qualities) => {
    return qualities.map(({ _id, name, color }) => (
      <span className={"badge  m-1 bg-" + color} key={_id}>
        {name}
      </span>
    ))
  }

  const bodyRow = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{getBadges(user.qualities)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(user)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  }
  if (users.length === 0) {
    return <span className="badge bg-danger fs-2">Никто не тусанёт с тобой сегодня</span>
  }
  return (
    <>
      <h2>{handlePhrase()}</h2>
      <table className="table table-hover">
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody>{bodyRow()}</tbody>
      </table>
    </>
  )
}

export default Users
