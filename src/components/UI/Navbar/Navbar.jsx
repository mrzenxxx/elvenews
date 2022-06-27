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
    {
        return (
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/posts">Посты</Link>
                    <Link to="/about">О сайте</Link>
                </div>
                <MyButton onClick={logout}>Выйти</MyButton>
            </div>
        );
    }
};

export default Navbar;