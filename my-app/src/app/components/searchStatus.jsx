const SearchStatus = ({ length }) => {
  const lastOne = Number(length.toString().slice(-1))
  let people = ``
  if (length > 4 && length < 15) people = "человек тусанут"
  if ([2, 3, 4].indexOf(lastOne) >= 0) people = "человекa тусанут"
  if (lastOne === 1) people = "человек тусанёт"

  return `${length} ${people} с тобой сегодня`
}

export default SearchStatus
