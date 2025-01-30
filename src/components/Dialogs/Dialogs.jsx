import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
	let dialogElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/> )
	let messageElements = props.state.messages.map( m => <Message message={m.message} avatar={m.avatar}/> )
	let newDialogElement = React.createRef();
	let addDialogs = () => {
		let text = newDialogElement.current.value
		props.addDialogs(text)
	}
	let onDialogsChange = () => {
		let text = newDialogElement.current.value
		props.updateNewMessagesDialogs(text)
	}
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogElements }
			</div>
			<div className={s.messages}>
				{ messageElements }
				<div>
					<textarea ref={ newDialogElement } 
						onChange={	onDialogsChange	}
						value={props.state.newMessagesDialogs}
					/>
				</div>
				<button onClick={ addDialogs }> Add Message </button>
			</div>
		</div>
	)
}

export default Dialogs 