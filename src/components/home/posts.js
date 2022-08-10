import React from 'react';

const Post = ({post}) => {
    console.log(post);
    return (
        <>
            <div>
                작성자 이름
                {post.author.username}
            </div>
            <div>
                카테고리 명
                {post.category.name}
            </div>
            <div>
                제목
                {post.title}
            </div>         
            <div>
                댓글수
                {post.comments.length}
            </div>
            <div>
                {post.author.username}
            </div>
            <div>
                {post.tags.map((tag, idx) => <div key={ tag.pk }>{tag.name}</div> )}
            </div>
            <div>
                게시글 수정일자
                {post.updated_at}
            </div>
            <div>
                좋아요 수
                {post.liked_users.length}
            </div>
            <div>
                스크랩 수
                {post.scrapped_users.length}
            </div>
            <div>
                조회 수
                {post.viewed_users.length}
            </div>
        </>
    );
};

export default Post;