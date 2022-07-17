import SearchStatus from "./searchStatus"
import User from "./user"

const Users = ({ users, ...rest }) => {
  return (
    <div>
      <h2>
        <span className={"badge bg-" + (!users.length ? "danger" : "primary")}>
          {users.length > 0 ? (
            <SearchStatus length={users.length} />
          ) : (
            "Никто с тобой сегодня не тусанёт"
          )}
        </span>
      </h2>
      {users.length > 0 && (
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
            {users.map((user) => (
              <tr key={user._id}>
                <User {...user} onHandleToggleBookmark={rest.onHandleToggleBookmark} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Users
