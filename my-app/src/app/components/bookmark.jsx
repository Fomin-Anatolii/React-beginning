const Bookmark = ({ favorites, ...rest }) => {
  return (
    <button {...rest}>
      <i className={"bi bi-bookmark" + (favorites ? "-fill" : "")}></i>
    </button>
  )
}

export default Bookmark
