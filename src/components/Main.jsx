import React from 'react';
import { Background } from '../components';
import { Link } from 'react-router-dom';


export const Main = ({ page2Ref, page3Ref, page4Ref }) => {
    return (
        <>
            <div className="main-page">
                <Background />
                <div className="title">
                    <div className="title-wrapper"></div>
                    <h1>React #2 Project</h1>
                    <h2>Created by Sangmean Hong</h2>
                </div>
            </div>
            <div className="page-2">
                <div className="world-wrapper" ref={page2Ref}>
                    <div>
                        <h2>Explore the World</h2>
                        <h3>Search countries in the world</h3>
                        <Link to="/country">Start Now</Link>
                    </div>
                </div>
            </div>

            <div className="page-3">
                <div className="details-wrapper" ref={page3Ref}>
                    <div>
                        <h2>Explore Country details</h2>
                        <h3>Search more details of countries</h3>
                        <Link to="/details">Start Now</Link>
                    </div>
                </div>
            </div>

            <div className="page-4">
                <div className="board-wrapper" ref={page4Ref}></div>
                <div className="board">
                    <h2>Your Board</h2>
                    <h3>Search countries in the world</h3>
                    <Link to="/board">Start Now</Link>
                </div>
            </div>
        </>
    );
}   