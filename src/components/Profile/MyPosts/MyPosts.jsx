import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Posts';

const MyPost = (props) => {
	let postsElements = props.posts.map( p => <Post avatar={p.avatar} message={p.message} likesCount={p.likesCount}/>)
	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
		
	}
    return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div> 
				<div>
        	<textarea onChange={	onPostChange	}	
						ref={ newPostElement } 
						value={props.newPostText}
					/>
				</div>
				<button onClick={	addPost }>Add Post</button>
      </div>
      <div className= {s.posts}>
        { postsElements }
      </div> 
    </div>
		)
}

export default MyPost;