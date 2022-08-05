import React from "react"
import PropTypes from "prop-types"

const Bookmark = ({ bookmark, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (bookmark ? "-fill" : "")}></i>
        </button>
    )
}
Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired
}
export default Bookmark
