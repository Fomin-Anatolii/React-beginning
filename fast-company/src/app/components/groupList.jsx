import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => {
                return (
                    <li
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        key={items[item][valueProperty]}
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                )
            })}
        </ul>
    )
}

GroupList.defaultProps = {
    contentProperty: "name",
    valueProperty: "_id"
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
}

export default GroupList
