import React from 'react';
import s from './Post.module.css' // s - объект, где ключи - это классы, т.е. мы обращаемся к этому объекту и получаем класс

const Post = ( props ) => {
  return (
	<div className= { s.item }>
		<img src={props.avatar} alt="Posts info" />
		{ props.message }
		<div>
			<span>like</span> { props.likesCount }
		</div>
	</div>
	)
}

export default Post;