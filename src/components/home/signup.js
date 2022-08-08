import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, CssBaseline, Box, FormControl, Grid, FormControlLabel, Checkbox, Typography, FormHelperText } from '@mui/material';
import { SignupApi } from '../../api/accounts';
import styled from "styled-components";

const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Signup = () => {
    const [checked, setChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordState, setPasswordState] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handleAgree = (e) => {
        setChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        
        let joinData = {
            email: data.get('email'),
            username: data.get('name'),
            password: data.get('password'),
            rePassword: data.get('rePassword'),
        };

        const { email, username, password, rePassword } = joinData;

        // 이메일 유효성 체크
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) setEmailError('올바른 이메일 형식이 아닙니다.');
        else setEmailError('');

        // 비밀번호 유효성 체크
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(password))
        setPasswordState('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
        else setPasswordState('');

        // 비밀번호 같은지 체크
        if (password !== rePassword) setPasswordError('비밀번호가 일치하지 않습니다.');
        else setPasswordError('');

        // 이름 유효성 검사
        const nameRegex = /^[가-힣a-zA-Z]+$/;
        if (!nameRegex.test(username) || username.length < 1) setNameError('올바른 이름을 입력해주세요.');
        else setNameError('');

        // 회원가입 동의 체크
        if (!checked) alert('회원가입 약관에 동의해주세요.');

        if (
            emailRegex.test(email) &&
            passwordRegex.test(password) &&
            password === rePassword &&
            nameRegex.test(username) &&
            checked
        ) {
            // API 요청
            joinData = {
                email: data.get('email'),
                username: data.get('name'),
                password: data.get('password'),
            };
            SignupApi(joinData, navigate, setRegisterError);
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
            Demu 회원가입
            </Typography>
            <Box component="form" onSubmit={ handleSubmit } noValidate sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        type="email"
                        id="email"
                        name="email"
                        label="이메일 주소"
                        error={ emailError !== '' || false }
                    />
                </Grid>
                <FormHelperTexts>{emailError}</FormHelperTexts>
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
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        label="비밀번호 재입력"
                        error={passwordError !== '' || false}
                    />
                </Grid>
                <FormHelperTexts>{passwordError}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="닉네임"
                    error={nameError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{nameError}</FormHelperTexts>
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox onChange={ handleAgree } color="primary" />}
                    label="회원가입 약관에 동의합니다."
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                >
                회원가입
                </Button>
            </FormControl>
            <FormHelperTexts>{registerError}</FormHelperTexts>
            </Box>
        </Box>
        </Container>
    );
};

export default Signup;