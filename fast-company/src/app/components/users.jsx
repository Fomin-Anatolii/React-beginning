import React, { useState } from "react"
import Pagination from "./pagination"
import User from "./user"
import { paginate } from "../utils/paginate"
import GroupList from "./groupList"
import api from "../api"
import PropTypes from "prop-types"

const Users = ({ users, ...rest }) => {
    const count = users.length
    const pageSize = 4
    const [professions] = useState(api.professions.fetchAll())
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const handleProfessionSelect = (params) => {
        console.log(params)
    }
    console.log(professions)

    const userCrop = paginate(users, currentPage, pageSize)

    return (
        <>
            <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}
            />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <tr key={user._id}>
                                <User {...user} {...rest} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
