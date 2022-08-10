import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, CssBaseline, Box, FormControl, Grid, Typography, FormHelperText } from '@mui/material';
import { LoginApi } from '../../api/accounts';
import styled from "styled-components";

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Login = () => {
    const [passwordState, setPasswordState] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        
        const joinData = {
            username: data.get('username'),
            password: data.get('password')
        };

        const { password } = joinData;

        // // 이메일 유효성 체크
        // const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        // if (!emailRegex.test(username)) setEmailError('올바른 이메일 형식이 아닙니다.');
        // else setEmailError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
        setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        if (
            //emailRegex.test(email) &&
            passwordRegex.test(password)
        ) {
            // API 요청
            console.log(joinData);
            LoginApi(joinData, navigate, setRegisterError);
        }
    };
    
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                Demu 로그인
                </Typography>
                <Box component="form" onSubmit={ handleSubmit } noValidate sx={{ mt: 3 }}>
                <FormControl component="fieldset" variant="standard">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                type="text"
                                id="username"
                                name="username"
                                label="닉네임 또는 이메일"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type="password"
                                id="password"
                                name="password"
                                label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                                error={passwordState !== '' || false}
                            />
                        </Grid>
                        <FormHelperTexts>{passwordState}</FormHelperTexts>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={ { mt: 3, mb: 2, bgcolor: "warning.dark", ":hover": { bgcolor: "warning.main" } } }
                        size="large"
                        >
                        로그인
                    </Button>
                </FormControl>
                <FormHelperTexts>{registerError}</FormHelperTexts>
                </Box>
            </Box>
            <Grid display={ "flex" }>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={ { mt: 3, mb: 2, mr: 3, bgcolor: "error.dark", ":hover": { bgcolor: "error.light" } } }
                        size="large"
                        >
                        카카오 로그인
                    </Button>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={ { mt: 3, mb: 2, bgcolor: "info.dark", ":hover": { bgcolor: "info.main" } } }
                        size="large"
                        >
                        구글 로그인 
                    </Button>
                </Grid>
        </Container>
    );
};

export default Login;