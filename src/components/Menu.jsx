import React, { useState } from 'react';
import { useLocation, Link, useHistory } from "react-router-dom";


const menuItems = [
    { name: "country", text: "Countries" },
    { name: "redux", text: "Redux" },
    { name: 'board', text: 'Board' }
]

export const Menu = ({ scrollToComponent, changePage }) => {
    const location = useLocation();
    const history = useHistory(); // 리액트에서 페이지를 이동할 수 있는 이유는 react-router-dom 을 이용해서 페이지의 기록을 알 수 있기 때문. 가장 많이 사용되는게 push()인데 history.push(원하는 컴포넌트의path)를 통해서 이동이 가능하다.


    console.log(history);
    const handleClick = (e) => {
        if (location.pathname === '/') {
            scrollToComponent(e);
        } else {
            changePage(e, history);
        }
    }

    const handleLogIn = (e) => {
        console.log(history);
        const path = e.target.getAttribute('name');
        if (localStorage.getItem('currentUser')) {
            history.push(`/userPage`);
        } else {
            history.push(`/${path}`)
        }
    }
    return (
        <div className="page-1">
            <div className="navbar">
                <i className="far fa-user user-icon" onClick={handleLogIn} name="login"></i>
                <Link to="/" className="link-logo">
                    <div className="logo">
                        <i className="fas fa-globe-asia"></i>
                        <h1>World</h1>
                    </div>
                </Link>
                <div className="menu-bar">
                    <ul>
                        {menuItems.map((menu, index) => (
                            <li key={index} name={menu.name} onClick={handleClick}>
                                {menu.text}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};