import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import QualitiesList from "../qualitiesList"
import API from "../../api"
import { useHistory } from "react-router-dom"
const UserPage = ({ usersID }) => {
    const history = useHistory()
    const handleBackAllUsers = () => {
        history.replace("/users")
    }
    const [userObject, setUserObject] = useState()

    useEffect(() => {
        API.users.getById(usersID).then((data) => setUserObject(data))
    }, [userObject])

    return userObject ? (
        <>
            <ul className="list-group">
                <li className="list-group-item">{userObject.name}</li>
                <li className="list-group-item">{`Профессия: ${userObject.profession.name}`}</li>
                <li className="list-group-item">
                    <QualitiesList qualities={userObject.qualities} />
                </li>
                <li className="list-group-item">{`Встретился, раз: ${userObject.completedMeetings}`}</li>
                <li className="list-group-item">{`Rate: ${userObject.rate}`}</li>
                <li className="list-group-item">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={handleBackAllUsers}
                    >
                        All users
                    </button>
                </li>
            </ul>
        </>
    ) : (
        <h1>Loading...</h1>
    )
}
UserPage.propTypes = { usersID: PropTypes.string }

export default UserPage
