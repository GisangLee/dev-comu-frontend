import React from 'react';
import { Route, Routes } from "react-router-dom";
import CheckHome from '../components/home/checkHome';
import Home from '../components/home/home';
import Login from '../components/home/login';
import Signup from '../components/home/signup';


const Root = () => {

    return (
        <Routes>
            <Route path="/" element={ <CheckHome/> }></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    );
};

export default Root;