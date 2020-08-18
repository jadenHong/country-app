import React from 'react';
import { useLocation } from "react-router-dom";

const menuItems = [
    { name: "country-nav", text: "Countries" },
    { name: "details", text: "Details" },
    { name: 'board', text: 'Board' }
]

export const Menu = ({ scrollToComponent }) => {
    const location = useLocation();
    console.log(location);
    const handleClick = (e) => {
        if (location.pathname === '/') {
            scrollToComponent(e);
        } else {
            console.log('not in main page');
        }
    }
    return (
        <div className="page-1">
            <div className="navbar"></div>
            <div className="logo">
                <i className="fas fa-globe-asia"></i>
                <h1>World</h1>
            </div>
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
    );
};