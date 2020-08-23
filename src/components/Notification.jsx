import React, { useState, useEffect } from 'react';

export const Notification = ({ duration, message }) => {
    const [show, setShow] = useState();
    useEffect(() => {
        (async () => {
            const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

            await sleep(150);
            setShow(true);
            await sleep(duration * 1000);
            setShow(false);
        })();
    }, [duration])
    return (
        <div className={`notification ${show ? 'show' : 'hide'}`}>
            {message}
        </div>
    )
}