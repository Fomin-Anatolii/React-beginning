import React from "react"
import PropTypes from "prop-types"

const Bookmark = ({ favorites, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (favorites ? "-fill" : "")}></i>
        </button>
    )
}
Bookmark.propTypes = {
    favorites: PropTypes.bool.isRequired
}
export default Bookmark
