import React, { Component }  from 'react';

const inputStyle = {
    textAlign: 'left'
};

export function Login () {
    return(
        <div>
            <div style={inputStyle}><h1>Log in</h1></div>
            <div style={inputStyle}><label>Email:</label><input type="text" name="customeremail"/></div>
            <div style={inputStyle}><label>Password:</label><input type="password" name="password"/></div>
            <div style={inputStyle}><h1><button type="submit" onClick = {login}>Login</button></h1></div>
        </div>
    );
}

function login () {
    console.log("logged In");
}