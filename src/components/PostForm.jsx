import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewComment = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        console.log(post,'!!!');
        console.log(newPost,'!!!');
        create(newPost);
    }
    return (
        <form>
            <MyInput
                value = {post.body}
                onChange = {e => setPost({email: 'Admin@spb.mail.ru', body: e.target.value})}
                type="text"
                placeholder="Введите комментарий..."
            />
            <MyButton onClick={addNewComment} style = {{width: '100%'}}>Отправить</MyButton>
        </form>
    );
};

export default PostForm;