import React from "react"
import s from './../Dialogs.module.css'

const Message = (props) => {
	return (
		<div className={s.dialog}  >
			<img src={props.avatar} alt="Userr Avatar" className={s.avatar}/>
			{ props.message }
		</div>
	)
}

export default Message