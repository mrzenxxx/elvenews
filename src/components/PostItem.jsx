import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import {capitalize} from "../utils/capitalize";

const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="post">
                <div className="post__content">
                    <div className="post__header"> {props.post.id}. {capitalize(props.post.title)} </div>
                    <div>{capitalize(props.post.body)}</div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={()=>navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
                    <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
                </div>
        </div>
    );
};

export default PostItem;