export const reducer = (state, action) => {
  console.log(action);
  if (!action) return state;
  switch (action.type) {
    case "SET_FETCHING_COMICS_STATUS":
      return { ...state, fetchingComics: action.fetchingComics }
    case "SET_SEARCH_STRING":
      return { ...state, searchString: action.searchString }
    case "SET_COMICLIST":
      return { ...state, comicList: action.comicList }
    default:
      return state;
  }
}