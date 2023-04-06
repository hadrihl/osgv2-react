import React from "react";
import '../App.css';

function HomePage() {
    return (
        <div className="App-header">
            <h1>Welcome to osgv2-react app</h1>
            <p>Please login or register to continue.</p>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
        </div>
    );
}

export default HomePage;