import React from 'react';
import logo from './logo.svg';

import {LandingPage} from './LandingPage.js';
import {FilmDetails} from './FilmDetails.js';
import {PickSeats} from './PickSeats.js';
import {Checkout} from './Checkout.js';
import {Login} from './Login.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <button id="demo-menu-lower-left"
				  className="mdl-button mdl-js-button mdl-button--icon">
			  <i className="material-icons">. . .</i>
		  </button>
		  <nav className="mdl-navigation">
			  <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
				  htmlFor="demo-menu-lower-left">
				  <li className="mdl-menu__item"><a href="url">Home</a></li>
				  <li className="mdl-menu__item"><a href="url">About</a></li>
				  <li className="mdl-menu__item"><a href="url">Login</a></li>
				  <li className="mdl-menu__item"><a href="url">Checkout</a></li>
			  </ul>
		  </nav>
        <div>
			<h1>Dinner and a movie</h1>
		</div>
      </header>
	<div>
		<Login></Login>
	</div>
	</div>
  );
}

export default App;
