import React, { Component } from 'react';

export default function Logout(){
    localStorage.setItem('token', "");
    localStorage.setItem('userId', "");
    return(
        <div className="padded-header">
            <h3>You have successfully logged out.</h3>
        </div>
    )
}