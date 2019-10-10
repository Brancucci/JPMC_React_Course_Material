import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { store } from './store/store';
import { GetComics } from './GetComics';
import { ComicsList } from './ComicsList';


function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => store.subscribe(() => setState({ ...store.getState() })));

  return (
    <>
      <GetComics {...state} />
      <ComicsList {...state} />
    </>
  );
}
export default App;
