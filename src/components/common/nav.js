import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function LinkTab(props) {
    return (
      <Tab sx={{ paddingY: "2rem" }}
        component={ Link }
        to={ props.href }
        {...props}
      />
    );
  }

const Nav = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100vh", position: "fixed"}}>
            <Tabs value={ value } onChange={ handleChange } orientation='vertical' sx={{ borderRight: 1, borderColor: 'error.main', mt:"8rem", height: "100%"}}>
                <LinkTab label="Q & A" href="/home"/>
                <LinkTab label="커뮤니티" href="/home/community"></LinkTab>
                <LinkTab label="스터디 / 모임" href="/home/study"></LinkTab>
                <LinkTab label="공모전 / 대회" href="/home/challenges"></LinkTab>
                <LinkTab label="구인구직" href="/home/jobs"></LinkTab>
                <LinkTab label="글 작성하기" href="/home/write-post"></LinkTab>
            </Tabs>
        </Box>
    );
};

export default Nav;