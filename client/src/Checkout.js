import React, { Component }  from 'react';

export function Checkout () {
    return(
        <div>
            <div><h1>Checkout</h1></div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>seat</td>
                        <td>$18</td>
                        <td>2</td>
                        <td>$36</td>
                    </tr>
                    <tr>
                        <td>Popcorn</td>
                        <td>$10</td>
                        <td>1</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>SubTotal</td>
                        <td></td>
                        <td>3</td>
                        <td>$46</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div><h1><button type="submit" onClick = {checkout}>Purchase</button></h1></div>
            <div><a href="url">Keep shopping</a></div>
        </div>
    );
}

function checkout () {
    console.log("Checking Out");
}
