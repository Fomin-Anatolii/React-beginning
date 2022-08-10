import React, { useEffect, useState } from "react"
import Users from "./components/users"

import api from "./api"

function App() {
    const [users, setUsers] = useState()

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookmark = (id) => {
        const newUsers = users.map((item) => {
            if (item._id === id) {
                item.bookmark = !item.bookmark
            }
            return item
        })
        setUsers(newUsers)
    }

    return (
        <>
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookmark={handleToggleBookmark}
                />
            )}
        </>
    )
}

export default App
