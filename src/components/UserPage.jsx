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
        <div className="user-page">
            <h2>Welcome {getUsername}</h2>
            <div className="buttons">
                <button onClick={handleLogOut} className="logout-button">Log Out</button>
                <button type="submit" onClick={handleClick} className="dropout-button">Drop out</button>
            </div>
            <div>
                {dropBtnClicked ? <DropPage /> : ''}
            </div>
        </div>
    )
}