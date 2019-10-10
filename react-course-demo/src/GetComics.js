import React from 'react';
import { store } from './store/store';
const styles = {
 mainSection: {
  padding: '20px',
 }
}
export const GetComics = () => (
 <section style={styles.mainSection}>
  <h1 className="jumbotron">Marvel Comics World</h1>
  <div className="form-group">
  <label htmlFor="comicInput">Name of comic series</label>
  <input onChange={handleChange} id="comicInput" className="form-control" />
  <small className="form-text text-muted">Enter part of a comic title</small>
  </div>
  <button onClick={e => store.dispatch({type:"FETCH_COMICS"})} className="btn btn-primary">Go >></button>
 </section>
);

function handleChange(e) {
 store.dispatch({type:"SET_FETCHING_COMICS_STATUS", fetchComics: "STARTING"})
 // Grab value from target
 const searchString = e.target.value;
 // dispatch an action
 store.dispatch({type:"SET_SEARCH_STRING", searchString:searchString});
}