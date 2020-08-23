import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const LogIn = () => {
    const [loginInfo, setLoginInfo] = useState();
    const [loginMsg, setLoginMsg] = useState('');
    const { msg } = loginMsg;
    const history = useHistory();

    const onLogIn = async () => {

        const URL = 'http://localhost:7778/login';
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(loginInfo),
        });
        const data = await response.json();
        setLoginMsg(data);
        if (data.state === 200) {
            localStorage.setItem('currentUser', loginInfo.username);
            history.push('/userPage');
        }
    }

    const changePageToSignUp = async () => {
        history.push('/signup');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value,
        })
    }

    return (
        <div className="login-page">
            <div>
                <label>User Name</label>
                <input type="text" onChange={handleChange} name="username" />
                <label>Password</label>
                <input type="text" onChange={handleChange} name="password" />
            </div>
            <div>
                <button type="submit" onClick={onLogIn} className="login-button">Log In</button>
                <button type="submit" onClick={changePageToSignUp} className="signup-button">Sign Up</button>
            </div>
            {/* <button type="submit" onClick={cancelMebership}>Drop out</button> */}
            <div>{msg}</div>
        </div>
    )
}