import React, {useContext, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');


    const login = event => {
        event.preventDefault();
        console.log(id, pass);
        if(id==='admin'&&pass==='admin'){
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
        } else {
            alert('Неверные данные пользователя!\nПравильные логин и пароль:\nadmin, admin');
        }

    }

    return (
        <div >
            <form className="post" style={{flexDirection: 'column'}}>
                <h3 className="post__header">Авторизация пользователя</h3>
                <MyInput onChange = {(e)=>{setId(e.target.value)}} type =  'text' placeholder='Введите логин'/>
                <MyInput onChange = {(e)=>{setPass(e.target.value)}} type = 'password' placeholder='Введите пароль'/>
                <MyButton onClick = {login} style={{width: "100%", marginTop:10}} >Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;