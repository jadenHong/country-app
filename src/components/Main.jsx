import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
    return (
        <div className="main-page">
            <div className="page-1">
                <div className="navbar">
                    <div className="logo">
                        <i class="fas fa-globe-asia"></i>
                        <h1>World</h1>
                    </div>
                    <div className="menu-bar">
                        <ul>
                            <li>Countries</li>
                            <li>Details</li>
                            <li>Board</li>
                        </ul>
                    </div>
                </div>
                <div className="title">
                    <h1>React #2 Project</h1>
                    <h2>Created by Sangmean Hong</h2>
                </div>
            </div>

            <div className="page-2">
                {/* <div className="world"> */}
                <div className="world-wrapper">
                    <h2>Explore the World</h2>
                    <h3>Search countries in the world</h3>
                    <Link>Start Now</Link>

                </div>
                {/* </div> */}
            </div>

            <div className="page-3">
                <div className="details">
                    <h2>Explore Country details</h2>
                    <h3>Search more details of countries</h3>
                    <Link>Start Now</Link>
                </div>

            </div>

            <div className="page-4">
                <div className="board">
                    <h2>Your Board</h2>
                    <h3>Search countries in the world</h3>
                    <Link>Start Now</Link>
                </div>
            </div>


        </div>
    )
}