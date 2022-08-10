import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { post_id } = useParams();

    console.log(post_id);

    return (
        <div>
            하이
        </div>
    );
};


export default PostDetail;