import { apiKey } from './sensitive_constants';

const fetchComics = ({getState, dispatch}) => next => action => {
 if (action.type === "FETCH_COMICS") {
  const searchString = getState().searchString;
  
  const url = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${searchString}&apikey=${apiKey}`;
  dispatch({type:"SET_FETCHING_COMICS_STATUS", fetchingComics:"FETCHING"});
  fetch(url)
  .then(res => res.json())
  .then(res => res.data.results)
  .then(comicList => dispatch({type:"SET_COMICLIST", comicList: comicList}))
  .catch(console.error)
  .finally(() =>   dispatch({type:"SET_FETCHING_COMICS_STATUS", fetchingComics:"RESOLVED"}));
 }
 next(action);
}

export const middlewares = [fetchComics,]