import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signup from '../components/home/signup';

const Root = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    );
};

export default Root;