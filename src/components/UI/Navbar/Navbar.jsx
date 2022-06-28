import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
     if (isAuth){
        return (
        <div className="navbar">
            <h1 className="navbar__title">ELVENEWS</h1>
            <div className="navbar__links">
                <Link to="/posts">К СПИСКУ ПОСТОВ</Link>
                    <div style={{width: '15px'}}/>
                <Link to="/about">О ПРОЕКТЕ</Link>
            </div>
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
        );
    }
};

export default Navbar;