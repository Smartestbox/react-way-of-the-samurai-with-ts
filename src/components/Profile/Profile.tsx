import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../App";



type ProfileProps = {
    state: RootStateType
    addPost: (postMessage: string) => void
}


const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;