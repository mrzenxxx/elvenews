import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div >
            <form className="post" style={{flexDirection: 'column'}}>
                <h3 className="post__header">Авторизация пользователя</h3>
                <MyInput type =  'text' placeholder='Введите логин'/>
                <MyInput type = 'password' placeholder='Введите пароль'/>
                <MyButton onClick = {login} style={{width: "100%", marginTop:10}} >Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;