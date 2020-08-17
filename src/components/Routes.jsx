import { Main } from './Main';
import { Test } from './Test';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            {/* <Main /> */}
            <Test />
        </BrowserRouter>
    )
}