import React, {RefObject, useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

export type MyPostsProps = {
    posts: Array<PostType>
    newPostText: string
    dispatch: () => void
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const MyPosts = (props:MyPostsProps) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const textAreaRef:RefObject<HTMLTextAreaElement> = useRef(null)

    const addPost = () => {
        if(textAreaRef.current) {
            props.dispatch(addPostActionCreator())
        }
        // props.updateNewPostText('')
    }

    const onPostChange = () => {
        if(textAreaRef.current) {
            let text = textAreaRef.current?.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={textAreaRef}
                        onChange={onPostChange}
                        value={props.newPostText}
                    >

                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;