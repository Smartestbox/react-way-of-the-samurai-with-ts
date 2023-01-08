import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.postItem}>
            <div>
                <img
                src="https://s2.abcstatics.com/abc/www/multimedia/cultura/2022/10/05/avatar-screencap-RCTvZAUJbeWOY1HB2uY1jFJ-1024x512@abc.jpg"
                alt="avatar"/>
                <span>post 1</span>
            </div>
            <span>like</span>
        </div>
    );
};

export default Post;