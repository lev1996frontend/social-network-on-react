import React from 'react';
// import s from './Profile.module.css'
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
			<div >
				<ProfileInfo />
				<MyPost 
					posts={props.profilePage.posts} 
					newPostText={props.profilePage.newPostText}
					updateNewPostText={props.updateNewPostText}
					addPost={props.addPost}
				/>
			</div>
	)
}

export default Profile;