import React, { Component }  from 'react';
import chunnel from './chunnel.jpg';

export function FilmDetails () {
    return(
        <div>
            <div><h1>Chunnel</h1></div>
            <div><h1>Tag Line Here</h1></div>
            <div>
                <ul>
                    <li>4:00pm</li>
                    <li>7:00pm</li>
                    <li>10:00pm</li>
                </ul>
            </div>
            <div><img src={chunnel} title="Image" alt="Alt Text"></img></div>
            <div><h1>Movie Description</h1></div>
        </div>
    );
}