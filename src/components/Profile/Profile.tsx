import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";



type ProfileProps = {
    state: RootStateType
}


const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.profilePage.posts}/>
        </div>
    );
};

export default Profile;