import React from 'react';
import { Box } from '@mui/material';
import Post from './post';

const Posts = ({posts, loading}) => {
    return (
        <Box sx={{ bgcolor:"background.papers", height: "100vh", paddingLeft: "10rem", paddingRight: "4rem", marginTop: "10rem"}}>

            { loading ? "로딩중" : (
                posts.length >= 1 ? posts.map((post, idx) => {
                    return <Post key={post.pk} post={post}/>
                }) : "게시글이 없습니다."
            )}
        </Box>
    );
};

export default Posts;