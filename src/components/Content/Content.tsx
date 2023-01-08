import React from 'react';
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="content-img"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Content;