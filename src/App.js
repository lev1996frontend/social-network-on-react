import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar.';
import { Route, Routes, } from 'react-router-dom';


const App = (props) => {
  return (
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<Sidebar state={props.state.sidebar.friends}/>
				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} 
							updateNewMessagesDialogs={props.updateNewMessagesDialogs}
							newMessagesDialogs={props.state.dialogsPage.newMessagesDialogs}
							addDialogs={	props.addDialogs	}/>}/>
						<Route path='/profile' element={<Profile 
							profilePage={props.state.profilePage} 
							addPost={props.addPost}
							updateNewPostText={props.updateNewPostText}/>}/>
						<Route path='/news' element={<Dialogs/>}/>
						<Route path='/music' element={<Dialogs/>}/>
						<Route path='/settings' element={<Dialogs/>}/>
					</Routes>
				</div>
			</div>
			)
}

export default App;
