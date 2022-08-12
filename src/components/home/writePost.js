import React from 'react';
import { Box } from '@mui/material';
import Nav from '../common/nav';

const WritePost = () => {

    return (
        <>
            <Nav/>
            <Box sx={{ bgcolor:"background.papers", height: "20%", paddingLeft: "10rem", paddingTop: "3rem", paddingRight: "4rem", paddingBottom: "3rem"}}>
                글쓰기
            </Box>
        </>
    );
};


export default WritePost;