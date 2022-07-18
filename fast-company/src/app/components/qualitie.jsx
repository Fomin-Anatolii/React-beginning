import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ qualities }) => {
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

Qualitie.propTypes = {
    qualities: PropTypes.array.isRequired
}

export default Qualitie
