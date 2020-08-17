import React from 'react';
import { Main } from "./Main";

export const Test = () => {
    return (
        <div>
            <img src={require("../images/1.jpg")} alt="test" style={{ width: '100%', position: 'absolute', top: '0', left: '0', zIndex: '-1' }} />
            <Main />
        </div>
    );
}