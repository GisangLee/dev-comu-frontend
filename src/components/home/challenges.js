import { Box } from '@mui/material';
import React from 'react';
import Nav from '../common/nav';


const Challenges = () => {
    return (
        <>
            <Nav/>
            <Box sx={{ bgcolor:"error.main", height: "100vh", paddingLeft: "9rem"}}>
                공모전
            </Box>
        </>
    )
};


export default Challenges;