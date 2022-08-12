import React from 'react';
import axios from "axios";
import ENV from '../config';

export const GetPostsApi = async (category) => {
    const env = ENV();

    const headers = {
        'Content-Type': 'application/json',
        //'Authorization': 'JWT fefege...',
        "system-key": `${env.SYSTEM_KEY}`,
    };

    const page = 1;

    try{
        const posts = await axios.get(`/api-v1/posts?page=${page}&category=${category}`, { headers }).then(res => res.data);

        return await posts;

    } catch(e){
        console.log(e);
    }
};