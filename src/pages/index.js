import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../components/home/login';
import Signup from '../components/home/signup';

const Root = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    );
};

export default Root;