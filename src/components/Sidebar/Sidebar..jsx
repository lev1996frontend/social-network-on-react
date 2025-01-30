import React from 'react';
import s from './Sidebar.module.css' // s - объект, где ключи - это классы, т.е. мы обращаемся к этому объекту и получаем класс

const Sidebar = ( props ) => {
	const friendsElements = props.state.map(
		friend => (
			<div className={s.friend} >
				<img src={friend.avatar} className={s.avatar} alt={friend.alt}/>
				<span className={s.friendName} >{friend.name}</span>
			</div>
		)
	)
  return (
	<div className= { s.sidebar } >
		<h3 className={	s.title	}>Friends</h3>
		<div className={	s.friendsList	}>
			{	friendsElements	}
		</div>
	</div>
	)
}

export default Sidebar;