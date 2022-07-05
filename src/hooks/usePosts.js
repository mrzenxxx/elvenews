import {useMemo} from "react";
import {type} from "@testing-library/user-event/dist/type";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {

            if (sort === 'id') {
                return [...posts].sort((a,b) => a[sort]-(b[sort]));
            }

            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));

        }

        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
    return sortedAndSearchedPosts;
}