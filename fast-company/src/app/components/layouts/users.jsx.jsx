import React from "react"
import { useParams } from "react-router-dom"
import UsersList from "../usersList"
import UserPage from "./userPage"

const Users = () => {
    const { usersID } = useParams()

    return usersID ? <UserPage usersID={usersID} /> : <UsersList />
}

export default Users
