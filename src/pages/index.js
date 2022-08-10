import React from 'react';
import { Route, Routes } from "react-router-dom";
import Challenges from '../components/home/challenges';
import CheckHome from '../components/home/checkHome';
import Community from '../components/home/communiy';
import Home from '../components/home/home';
import Jobs from '../components/home/jobs';
import Login from '../components/home/login';
import PostDetail from '../components/home/postdetail';
import Signup from '../components/home/signup';
import Study from '../components/home/study';


const Root = () => {

    return (
        <Routes>
            <Route path="/" element={ <CheckHome/> }></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/home/community" element={<Community/>}></Route>
            <Route path="/home/study" element={<Study/>}></Route>
            <Route path="/home/challenges" element={<Challenges/>}></Route>
            <Route path="/home/jobs" element={<Jobs/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/post/:post_id" element={<PostDetail/>}></Route>
        </Routes>
    );
};

export default Root;