"use client"

import React, { createContext, useState } from 'react';


export const AuthContex = createContext("");

const AuthStorage = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [selectDuah, setSelectDuah] = useState("")






    const authInfo = {
        selectDuah,
        setSelectDuah,
        loginUser,
        setLoginUser,
        loading,
        setLoading,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthStorage;