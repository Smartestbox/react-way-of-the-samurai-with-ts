import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.postItem}>
            <div>
                <img
                src="https://s2.abcstatics.com/abc/www/multimedia/cultura/2022/10/05/avatar-screencap-RCTvZAUJbeWOY1HB2uY1jFJ-1024x512@abc.jpg"
                alt="avatar"/>
                <span>{props.message}</span>
            </div>
            <span>{props.likesCount} likes</span>
        </div>
    );
};

export default Post;