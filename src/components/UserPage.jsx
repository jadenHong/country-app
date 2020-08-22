import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DropPage } from '.';

export const UserPage = () => {
    const getUsername = localStorage.getItem('currentUser');
    const history = useHistory();
    const [dropBtnClicked, setDropBtnClicked] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem('currentUser');
        history.push('/board');
    }

    const handleClick = () => {
        setDropBtnClicked(true);
    }


    return (
        <>
            <div>Welcome {getUsername}</div>
            <button onClick={handleLogOut}>Log Out</button>
            <button type="submit" onClick={handleClick}>Drop out</button>
            {dropBtnClicked ? <DropPage /> : ''}
        </>
    )
}