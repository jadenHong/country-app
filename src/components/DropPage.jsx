import React, { useState } from 'react';

export const DropPage = () => {
    const [userInfo, setUserInfo] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }

    const onConfirmation = () => {
        if (userInfo === undefined || userInfo.password === userInfo.confirmation)
            return cancelMebership();
        else
            return alert('Password does not matched');
    }
    // const username = localStorage.getItem('currentUser');

    const cancelMebership = async () => {
        const URL = 'http://localhost:7778/cancel';
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(userInfo),
        })
        const data = await response.json();
        console.log(data);
    }


    return (
        <>
            <label>User Name</label>
            <input type="text" onChange={handleChange} name="username" />
            <label>Password</label>
            <input type="text" onChange={handleChange} name="password" />
            <label>Confirmation</label>
            <input type="text" onChange={handleChange} name="confirmation" />
            <button type="submit" onClick={onConfirmation}>Submit</button>
        </>

    )
}