import React from 'react';
import {Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIDPage from "../pages/PostIDPage";
import Login from "../pages/Login";

export let publicRoutes = [
    {path : "/login",           exact: true,         element: <Login/>},
    {path : "*",                exact: true,         element: <Navigate to='/login'/>}
]

export const privateRoutes = [
    {path : "/about",           exact: true,         element: <About/>},
    {path : "/posts",           exact: true,         element: <Posts/>},
    {path : "/posts/:id",       exact: true,         element: <PostIDPage/>},
    {path : "*",                exact: true,         element: <Navigate to='/posts'/> }

]


