import React, { Component }  from 'react';

export function PickSeats () {
    return(
        <div>
            <div><h1>Where would you like To sit?</h1></div>
            <div><h1>Chunnel</h1></div>
            <div><h1>October 1 9:00pm</h1></div>
            <div><h1>Chase Theater</h1></div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Table Number</th>
                        <th onClick = {selectSeat}>Seat1</th>
                        <th onClick = {selectSeat}>Seat2</th>
                        <th onClick = {selectSeat}>Seat3</th>
                        <th onClick = {selectSeat}>Seat4</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Foo</td>
                        <td>Open</td>
                        <td>Foo2</td>
                        <td>Open</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Foo4</td>
                        <td>Open</td>
                        <td>Foo5</td>
                        <td>Open</td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div><h1><button type="submit" onClick = {goToCheckout}>Checkout</button></h1></div>
        </div>
    );
}

function goToCheckout () {
    console.log("Checking Out");
}

function selectSeat () {
    console.log("Seat Selected");
}