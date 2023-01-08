import React from 'react';
import s from './Content.module.css';

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="content-img"/>
            </div>
            <div>
                ava + description
            </div>
            <div className={s.posts}>
                My posts
                <div className={s.postItem}>
                    New post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Content;