import React from 'react';
import ReactDOM from 'react-dom/client'; // Обратите внимание на изменение импорта
import './index.css';
import App from './App';
import { addDialogs, addPost, updateNewMessagesDialogs, updateNewPostText }  from './redux/state';
import { BrowserRouter } from 'react-router-dom';


// Создайте корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
	// Используйте root.render вместо ReactDOM.render
	root.render(
		<BrowserRouter>
			<App state={state}	addPost={ addPost } updateNewPostText={	updateNewPostText	} 
			updateNewMessagesDialogs={	updateNewMessagesDialogs	} addDialogs={ addDialogs }/>
		</BrowserRouter>
	);
}
