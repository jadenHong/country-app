import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Notification } from '.';

export const ListEdit = () => {
    const location = useLocation();
    const state = location.state;
    const { id, title, description } = state;
    const [newData, setNewData] = useState();
    const [clicked, setclicked] = useState(0);

    const handleUpdate = async () => {
        const URL = 'http://localhost:7778/country/updateData';
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        });
        setclicked(1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData({
            ...newData,
            [name]: value,
            id: id,
        })
    }

    const handleDelete = async (id) => {
        const URL = `http://localhost:7778/country/deleteData/`;
        console.log(URL + id);
        await fetch(URL + id)
    }

    return (
        <div className="edit-section">
            <h2>Bulletin</h2>
            <div>
                <label>Title</label>
                <input type="text" defaultValue={title} onChange={handleChange} name="title" />
                <label>Description</label>
                <input type="text" defaultValue={description} onChange={handleChange} name="description" />

                <div className="edit-buttons">
                    <button type="submit" value="Update" className="button updateBtn" onClick={handleUpdate}>Update</button>
                    <button onClick={() => handleDelete(id)} className="button deleteBtn">Delete</button>
                    <button className="button listBtn">
                        <Link to="/boardList" className="list-link">List</Link>
                    </button>
                    {clicked > 0 && <Notification duration={2} message="Processing Successed .." />}

                </div>

            </div>
        </div>
    )
}