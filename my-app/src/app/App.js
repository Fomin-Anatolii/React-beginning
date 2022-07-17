import React, { useState } from "react"
import Users from "./components/users"
import api from "./api"

function App() {
  const [users, setUsers] = useState(
    api.users.fetchAll().map((item) => ({ ...item, favorites: false }))
  )

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }
  const handleToggleBookmark = (id) => {
    const newUsers = users.map((item) => {
      if (item._id === id) {
        item.favorites = !item.favorites
      }
      return item
    })
    setUsers(newUsers)
  }

  return (
    <Users
      users={users}
      onHandleDelete={handleDelete}
      onHandleToggleBookmark={handleToggleBookmark}
    />
  )
}

export default App
