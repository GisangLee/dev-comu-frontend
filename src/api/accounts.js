import React from 'react';
import axios from "axios";
import ENV from '../config';

export const SignupApi = async (data, navigate, setRegisterError) => {
    const env = ENV();

    const headers = {
        'Content-Type': 'application/json',
        //'Authorization': 'JWT fefege...',
        "system-key": `${env.SYSTEM_KEY}`,
    };

    await axios
    .post(`/api-v1/accounts/signup`, data, { headers })
    .then(function (response) {
      console.log(response, '성공');
      navigate('/login');
    })
    .catch(function (err) {
      console.log(err);
      const res = err.response.data;
      console.log(res);
      setRegisterError('회원가입에 실패하였습니다. 다시한번 확인해 주세요.');
    });  
};



export const LoginApi = async (data, navigate, setRegisterError) => {
  const env = ENV();

  const headers = {
      'Content-Type': 'application/json',
      //'Authorization': 'JWT fefege...',
      "system-key": `${env.SYSTEM_KEY}`,
  };

  await axios
  .post(`/api-v1/accounts/login`, data, { headers })
  .then(function (response) {
    console.log(response, '성공');
    const JWT_TOKEN = response.data.message.token;
    window.localStorage.setItem("demu-at", JWT_TOKEN);
    navigate('/home');
  })
  .catch(function (err) {
    console.log(err);
    const res = err.response.data;
    console.log(res);
    setRegisterError(res.error.message);
  });  
};