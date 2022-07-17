const Bookmark = ({ favorites, ...rest }) => {
  return (
    <button onClick={() => rest.handleToggleBookmark(rest.id)}>
      <i className={favorites ? "bi bi-bookmark-fill" : "bi bi-bookmark"}></i>
    </button>
  )
}

export default Bookmark
