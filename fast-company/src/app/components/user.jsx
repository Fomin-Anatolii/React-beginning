import React from "react"
import Quality from "./quality"
import Bookmark from "./bookmark"
import PropTypes from "prop-types"

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    favorites,
    onDelete,
    onToggleBookmark
}) => {
    return (
        <>
            <td>{name}</td>
            <td>
                <Quality qualities={qualities} />
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate + "/5"}</td>
            <td>
                <Bookmark
                    key={_id}
                    id={_id}
                    favorites={favorites}
                    onClick={() => onToggleBookmark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </>
    )
}

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    favorites: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
}
export default User
