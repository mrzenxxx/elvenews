import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: 'Admin' , body: ''});
    }
    return (
        <form>
            {/*<MyInput*/}
            {/*    value = {post.title}*/}
            {/*    onChange = {e => setPost({...post, title: e.target.value})}*/}
            {/*    type="text"*/}
            {/*    placeholder="Название поста"*/}
            {/*/>*/}
            <MyInput
                value = {post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Введите комментарий..."
            />
            <MyButton onClick={addNewPost} style = {{width: '100%'}}>Отправить</MyButton>
        </form>
    );
};

export default PostForm;