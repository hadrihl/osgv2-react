import { useState } from "react";

export default function Form() {
    // states for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // states for checking errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // handling the name
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    }

    // handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    // handing the password 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
}