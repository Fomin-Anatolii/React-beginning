import React from "react"
import { useParams } from "react-router-dom"
import UserPage from "../page/userPage"
import UsersListPage from "../page/usersListPage"

const Users = () => {
    const { usersID } = useParams()

    return usersID ? <UserPage usersID={usersID} /> : <UsersListPage />
}

export default Users
