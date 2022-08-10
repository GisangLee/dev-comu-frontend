import React, { createContext, useEffect, useState } from 'react';

function setLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, value);
    } catch (e) {
        // catch possible errors:
        // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
}
  
function getLocalStorage(key, initialValue) {
    try {
        const value = window.localStorage.getItem(key);
        return value;
    } catch (e) {
        // if error, return initial value
        return initialValue;
}
}

export const IsLoggedInContext = createContext({
    token: "",
    setTokenHandler: (token) => {},
});


const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(() => getLocalStorage("demu-at", null));

    const setTokenHandler = (jwt) => setToken(jwt);

    useEffect(() => {
        setLocalStorage("demu-at", token);
    }, [token]);

    return (
        <IsLoggedInContext.Provider value={{ token, setTokenHandler }}>
            { children }
        </IsLoggedInContext.Provider>
    )
};

export default AuthContextProvider;