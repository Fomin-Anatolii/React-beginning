const Bookmark = ({ favorites, ...rest }) => {
  return (
    <button onClick={() => rest.handleToggleBookmark(rest.id)}>
      <i className={favorites ? "bi bi-bookmark" : "bi bi-bookmark-fill"}></i>
    </button>
  )
}

export default Bookmark
