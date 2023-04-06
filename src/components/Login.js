import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const responseFacebook = (response) => {
        setEmail(response.email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic here
    }

    return (
        <div className="App-header">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <FacebookLogin 
                    appId="867667857647578"
                    autoLoad={false}
                    fields="email"
                    callback={responseFacebook}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;