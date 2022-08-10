import { Box } from '@mui/material';
import React from 'react';
import Nav from '../common/nav';


const Home = () => {
    return (
        <>
            <Nav/>
            <Box sx={{ bgcolor:"error.main", height: "100vh", paddingLeft: "9rem"}}>
                Q & A
            </Box>
        </>
    )
};


export default Home;