import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPage } from '.';
import RubberBand from 'react-reveal/RubberBand';

export const BoardPage = () => {
    const userExist = localStorage.getItem('currentUser');
    const [boardInfo, setBoardInfo] = useState({
        title: '',
        desc: '',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setBoardInfo({
            ...boardInfo,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        const URL = "http://localhost:7778/country/board/";
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(boardInfo),
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <RubberBand>
            <div className="bulletin-page">
                <div className="add-form">
                    <h2>Bulletin</h2>
                    <label>Title</label>
                    <input type="text" onChange={handleChange} name="title" />
                    <label>Description</label>
                    <input type="text" onChange={handleChange} name="desc" />
                    <div className="buttons">
                        <button type="submit" onClick={handleSubmit} className="add-button">ADD</button>
                        <Link to="/boardList" className="link-list">List</Link>
                    </div>
                </div>
                <div>
                    {userExist ? <UserPage /> : <LogIn />}
                </div>
            </div>

        </RubberBand>
    )
}