import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (Array.isArray(items)) {
        return (
            <ul className="list-group">
                {items.map((item) => {
                    return (
                        <li
                            className={
                                "list-group-item" +
                                (item === selectedItem ? " active" : "")
                            }
                            key={item[valueProperty]}
                            onClick={() => onItemSelect(item)}
                            role="button"
                        >
                            {item[contentProperty]}
                        </li>
                    )
                })}
            </ul>
        )
    } else {
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
