import Qualitie from "./qualitie"
import Bookmark from "./bookmark"

const User = ({ name, profession, rate, completedMeetings, ...rest }) => {
  return (
    <>
      <td>{name}</td>
      <td>
        <Qualitie qualities={rest.qualities} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate + "/5"}</td>
      <td>
        <Bookmark
          key={rest._id}
          id={rest._id}
          favorites={rest.favorites}
          handleToggleBookmark={rest.onHandleToggleBookmark}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => rest.onHandleDelete(rest._id)}>
          Delete
        </button>
      </td>
    </>
  )
}

export default User
