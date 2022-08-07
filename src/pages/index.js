import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../components/home/main';

const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    );
};

export default Root;