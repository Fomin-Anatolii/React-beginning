import React from "react"
import PropTypes from "prop-types"

const Quality = ({ qualities }) => {
    return (
        <>
            {qualities.map((item) => (
                <span key={item._id} className={"badge m-1 bg-" + item.color}>
                    {item.name}
                </span>
            ))}
        </>
    )
}

Quality.propTypes = {
    qualities: PropTypes.array.isRequired,
    name: PropTypes.string,
    _id: PropTypes.string
}

export default Quality
