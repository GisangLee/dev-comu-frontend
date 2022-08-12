import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Nav from '../common/nav';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { GetPostsApi } from '../../api/posts';
import Posts from './posts';
import SearchPostsApi from '../../api/searchPosts';


const Home = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const res = GetPostsApi("qa");
        res.then(data => setPosts(data.message));
        setLoading(false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = new FormData(e.currentTarget);
        
        const reqData = {
            keyword: data.get('keyword'),
            category: "qa"
        };

        const postsByKeyword = SearchPostsApi(reqData);
        postsByKeyword.then(res => setPosts(res.message));
    };

    return (
        <>
            <Nav/>
            <Box sx={{ bgcolor:"background.papers", height: "20%", paddingLeft: "10rem", paddingTop: "3rem", paddingRight: "4rem", paddingBottom: "3rem"}}>
                <Box component="div" display="block" sx={{ marginBottom: "1rem" }} fontSize="medium">Q & A</Box>
                <Box component="form" onSubmit={ handleSubmit } noValidate sx={{ mt: 3 }}>
                    <FormControl component="fieldset" variant="standard">
                        <TextField size="small" label="검색어" color="warning" name="keyword"/>
                    </FormControl>
                    </Box>
            </Box>
            <Box sx={{ bgcolor:"background.papers", height: "100vh", paddingLeft: "10rem", paddingRight: "4rem", marginTop: "10rem"}}>
                { loading ? "로딩중" : <Posts posts={posts} loading={loading}/> }
            </Box>
        </>
    )
};


export default Home;