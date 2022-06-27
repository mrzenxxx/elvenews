import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/MyModal/MyModal";

const PostIdPage = () => {
    const params = useParams();
    const [post,setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });
    const navigate = useNavigate();
    function openCommentForm(){return(
        <MyModal/>
    )};

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    },[])



    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div><h2>{post.id}. {post.title}.</h2> <br/> {post.body}. </div>
            }
            <h2 style={{marginTop: 25}}>Комментарии к посту</h2>
            {isComLoading
                ? <Loader/>
                : <div style={{marginTop: 15}}>
                    {comments.map(comm =>
                        <div key = {comm.email}>
                            <h5>{comm.email}</h5>
                            <div style={{marginBottom: 15}}>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
            {/*<MyButton onClick = {openCommentForm}> Оставить комментарий</MyButton>*/}
            <MyButton onClick = {()=>navigate('/posts')}>Вернуться к списку постов</MyButton>

        </div>
    );
};

export default PostIdPage;