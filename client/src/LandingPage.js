import React, { Component }  from 'react';
import films from './films.json';
import chunnel from './chunnel.jpg';
import {posterStyle, titleStyle, taglineStyle} from './LandingPage.css.js';

export function LandingPage () {
        return(
            <div>
                <div><h1>What do you want to see?</h1></div>
                <div><label>ShowDate:</label><input type="text" name="showdate" onChange={e => chooseDate(e.target.value)}/></div>

                {console.log("films are:", films)}

                <section className="filmsList"/>

                <section className="film" >
                    <div onClick={() => chooseFilm (films[0])}>
                        <img style={posterStyle} src={films[0].poster_path} title="Image" alt="Alt Text"></img>
                        <h3 style={titleStyle}>{films[0].title}</h3>
                        <p style={taglineStyle}>{films[0].tagline}</p>
                    </div>
                    <div onClick={() => chooseFilm (films[1])}>
                        <img src={films[1].poster_path} title="Image" alt="Alt Text"></img>
                        <h3>{films[1].title}</h3>
                        <p>{films[1].tagline}</p>
                    </div>
                    <div onClick={() => chooseFilm (films[2])}>
                        <img src={films[2].poster_path} title="Image" alt="Alt Text"></img>
                        <h3>{films[2].title}</h3>
                        <p>{films[2].tagline}</p>
                    </div>
                    <div onClick={() => chooseFilm (films[3])}>
                        <img src={films[3].poster_path} title="Image" alt="Alt Text"></img>
                        <h3>{films[3].title}</h3>
                        <p>{films[3].tagline}</p>
                    </div>
                </section>
            </div>

        );
}

function chooseFilm (film) {
    console.log("Section Clicked:" + film.title);
}

function chooseDate (e) {
    console.log("Date:" + e);
}