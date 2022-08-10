import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Nav from '../common/nav';
import TextField from '@mui/material/TextField';
import { GetPostsApi } from '../../api/posts';
import Posts from './posts';


const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const res = GetPostsApi();
        res.then(data => setPosts(data.message));
        setLoading(false);
    }, []);

    console.log(posts);

    return (
        <>
            <Nav/>
            <Box sx={{ bgcolor:"background.papers", height: "20%", paddingLeft: "10rem", paddingTop: "3rem", paddingRight: "4rem", paddingBottom: "3rem"}}>
                <Box component="div" display="block" sx={{ marginBottom: "1rem" }} fontSize="medium">Q & A</Box>
                <TextField size="small" label="검색어" color="warning"/>
            </Box>
            <Box sx={{ bgcolor:"background.papers", height: "100vh", paddingLeft: "10rem", paddingRight: "4rem", marginTop: "10rem"}}>
                { loading ? "로딩중" : <Posts posts={posts}/> }
            </Box>
        </>
    )
};


export default Home;