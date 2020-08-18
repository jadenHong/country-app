import React from 'react';

export const Background = () => {
    return (
        <div>
            <img src={require("../images/1.jpg")} alt="test" style={{ width: '100%', position: 'absolute', top: '0', left: '0', zIndex: '-1' }} />
        </div>
    );
}