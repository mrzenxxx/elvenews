import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value = {filter.query}
                onChange = { e => setFilter({...filter, query: e.target.value})}
                placeholder = "Поиск..."
            />
            <MySelect
                value = {filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Cортировка"
                options = {[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                    {value: 'id', name: 'По ID поста'}
                ]}
            />
        </div>
    );
};

export default PostFilter;