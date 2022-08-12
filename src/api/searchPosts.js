import React from 'react';
import axios from "axios";
import ENV from '../config';

const SearchPostsApi = async (reqData) => {
    const env = ENV();

    const headers = {
        'Content-Type': 'application/json',
        //'Authorization': 'JWT fefege...',
        "system-key": `${env.SYSTEM_KEY}`,
    };

    const page = 1;

    if (typeof(reqData.keyword) === "string" && reqData.keyword.length === 0) {
        alert("검색어를 입력해주세요");
        window.location.reload();

    }else {
        const keyword = reqData.keyword;
        const category = reqData.category;
    
        try{
            const posts = await axios.get(`/api-v1/posts/post/${keyword}?page=${page}&category=${category}`, { headers }).then(res => res.data);
    
            return await posts;
    
        } catch(e){
            console.log(e);
        }
    }

};

export default SearchPostsApi;