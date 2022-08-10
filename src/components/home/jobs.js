import { Box } from '@mui/material';
import React from 'react';
import Nav from '../common/nav';


const Jobs = () => {
    return (
        <>
            <Nav/>
            <Box sx={{ bgcolor:"error.main", height: "100vh", paddingLeft: "9rem"}}>
                Jobs
            </Box>
        </>
    )
};


export default Jobs;