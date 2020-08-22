import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Signup = () => {
    const [signupMsg, setSignupMsg] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('')
    const [passwordMath, setPasswordMatch] = useState(false);
    const usernameRef = useRef();
    const [signed, setSigned] = useState(false);
    const history = useHistory();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    useEffect(() => {
        if (
            password.length > 0 &&
            confirmation.length > 0 &&
            password === confirmation
        ) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }, [password, confirmation]);

    const onSignUp = async () => {
        const URL = 'http://localhost:7778/signup';
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        setSignupMsg(data.msg);
        setSigned(true);
    }

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
        if (name === 'confirmation') setConfirmation(value);
    }

    return (
        <div>
            <label>User Name</label>
            <input type="text" onChange={handleChange} name="username" ref={usernameRef} />
            <label>Password</label>
            <input type="text" onChange={handleChange} name="password" />
            <label>Confirmation</label>
            <input type="text" onChange={handleChange} name="confirmation" />
            <button type="submit" onClick={onSignUp} disabled={!passwordMath}>Sign Up</button>
            <div>{signupMsg}</div>
            {/* <div>{passwordMath && 'password does not matched'}</div> */}
            {signed ? <button onClick={() => history.push('/board')}>Go to Board</button> : ''}
        </div>
    )
}
