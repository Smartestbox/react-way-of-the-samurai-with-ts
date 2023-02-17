import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../redux/state";



type ProfileProps = {
    state: StateType
    dispatch: () => void
}


const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.state.profilePage.posts}
                newPostText={props.state.profilePage.newPostText}
                dispatch={props.dispatch}

            />
        </div>
    );
};

export default Profile;