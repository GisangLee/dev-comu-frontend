import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts';

const CheckHome = ({ jwt }) => {

    const { token, setTokenHandler } = useContext(IsLoggedInContext);

    //const { token } = TOKEN;
    console.log(token === "null");
    console.log(typeof(token));

    if (token === null || token === "null"){
        return <Navigate to="/login"/>
    }else{
        return <Navigate to="/home"/>
    }

};

export default CheckHome;