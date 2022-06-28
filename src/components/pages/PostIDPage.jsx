import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import {capitalize} from "../../utils/capitalize";
import PostForm from "../PostForm";

const PostIdPage = () => {
    const [modal, setModal] = useState(false);
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
    const createComment = (newComment) => {
        setComments([...comments, newComment]);
        setModal(false);
    }

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    },[])


    return (
            <div>
                {isLoading
                    ? <Loader/>
                    : <div className="post"><h3 className="post__header">{post.id}. {capitalize(post.title)}.</h3> <br/> <p>{capitalize(post.body)}</p>. </div>
                }
                <h2 style={{marginTop: 25, marginBottom: 10}}>Комментарии к посту<hr/></h2>
                {isComLoading
                    ? <Loader/>
                    : <div className="post__comments">
                        {comments.map(comm =>
                            <div key={comm.email}>
                                <h4 className="post__header">{comm.email}</h4>
                                <div style={{marginBottom: 15}}>{capitalize(comm.body)}<hr/></div>
                            </div>
                        )}
                    </div>
                }


                <MyButton style = {{marginTop: 30, width: "100%"}} onClick={()=> setModal(true)}>
                Оставить комментарий
                </MyButton>

                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create = {createComment}/>
                </MyModal>
                <MyButton style = {{width: "100%"}}onClick={() => navigate('/posts')}>Вернуться к списку постов</MyButton>

            </div>
        );



};

export default PostIdPage;