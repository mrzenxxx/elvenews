import React, {useEffect, useState, useRef} from "react";
import PostList from "../../components/PostList";
import PostFilter from "../../components/PostFilter";
import {usePosts} from "../../hooks/usePosts.js";
import PostService from "../../API/PostService";
import Loader from "../../components/UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import {getPagesCount} from "../../utils/pages";
import Pagination from "../../components/UI/pagination/Pagination";
import {useObserver} from "../../hooks/useObserver";
import MySelect from "../UI/select/MySelect";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState( {id: '', sort:'', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();
    console.log('CURRENT',lastElement);

    const [fetchPosts, isPostsLoading, postError] = useFetching( async(limit,page) =>{
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount , limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {setPage( page + 1)});

    useEffect(() => {
        fetchPosts(limit,page);
    },[page, limit])


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPosts([]);
        setPage(page);
    }

    return (
        <div className="App">

            <PostFilter
                filter = {filter}
                setFilter={setFilter}
                child = {
                    <MySelect
                        value={limit}
                        onChange={value => setLimit(value)}
                        defaultValue= 'Выводить посты по:'
                        options={[
                            {value: 5 , name: '5'},
                            {value: 10, name: '10'},
                            {value: 20, name: '20'},
                            {value: -1, name: 'Показать всё'},
                        ]}
                    />
                }
            />
            {postError &&
                <h1 style={{color: 'red'}}>Произошла ошибка {postError}</h1>
            }


            <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title={``}/>
            <div ref = {lastElement} style = {{height: 25, background: 'teal', opacity: 0.5}}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 75}}><Loader/></div>
            }
            <Pagination page = {page} changePage={changePage} totalPages={totalPages}/>


        </div>
    );
}

export default Posts;