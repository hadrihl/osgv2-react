import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const responseFacebook = (response) => {
        setName(response.name);
        setEmail(response.email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    }

    return (
        <div className="App-header">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Pasword" value={password} onChange={(e) => setPassword(e.target.value)} />

                <FacebookLogin 
                    appId=""
                    autoLoad={false}
                    fields="name, email"
                    callback={responseFacebook}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;