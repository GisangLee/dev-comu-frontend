import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { IsLoggedInContext } from '../../contexts';

const CheckHome = ({ jwt }) => {

    const { token, setTokenHandler } = useContext(IsLoggedInContext);

    //const { token } = TOKEN;
    console.log(token);

    if (token !== null){
        return <Navigate to="/home"/>
    }else{
        return <Navigate to="/login"/>
    }

};

export default CheckHome;