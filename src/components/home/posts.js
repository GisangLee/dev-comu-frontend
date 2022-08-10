import React from 'react';
import Post from './post';

const Posts = ({posts}) => {
    return (
        posts.map((post, idx) => {
            return <Post key={post.pk} post={post}/>
        })
    );
};

export default Posts;