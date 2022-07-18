import Qualitie from "./qualitie"
import Bookmark from "./bookmark"

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  favorites,
  onDelete,
  onToggleBookmark,
}) => {
  return (
    <>
      <td>{name}</td>
      <td>
        <Qualitie qualities={qualities} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate + "/5"}</td>
      <td>
        <Bookmark key={_id} id={_id} favorites={favorites} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </>
  )
}

export default User
