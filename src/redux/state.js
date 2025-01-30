import { rerenderEntireTree } from "../render";

export let state = {
	profilePage: {
		posts: [
			{
				id: 1, message: "Hi, how are you?", likesCount: 12, avatar: "https://i.pinimg.com/736x/1c/7f/de/1c7fdec8485d8c11a4b13617b8bf5285.jpg",
			}, {
				id: 2, message: "It's my first posts", likesCount: 11, avatar: "https://i.pinimg.com/736x/6b/1c/a0/6b1ca024d03114fc1ebd1299f6e99762.jpg", 
			},
		],
		newPostText: 'it-kamasutra.com',
	},
	dialogsPage: {
		messages: [
			{
				id: 1,	message: "Hi, brothers!!!",  avatar: "https://i.pinimg.com/736x/6b/1c/a0/6b1ca024d03114fc1ebd1299f6e99762.jpg", 
			},  {
				id: 2, message: "Yo", avatar: "https://i.pinimg.com/736x/1c/7f/de/1c7fdec8485d8c11a4b13617b8bf5285.jpg",
		}, 
		{
				id: 3, message: "Yo", avatar: "https://avatars.mds.yandex.net/i?id=c0af03d8a700afe7908e5009a26fe603cce5718e-7465150-images-thumbs&n=13",
		}, 
		{
				id: 4, message: "Yo", avatar: "https://avatars.mds.yandex.net/i?id=a943e13081c75211c43a97365752161a_l-9847423-images-thumbs&n=13",
		}
		],
		dialogs: [
			{
				id: 1, name: "Lev",  avatar: "https://i.pinimg.com/736x/6b/1c/a0/6b1ca024d03114fc1ebd1299f6e99762.jpg",
			}, 
			{
				id: 2, name: "Evgenich", avatar: "https://i.pinimg.com/736x/1c/7f/de/1c7fdec8485d8c11a4b13617b8bf5285.jpg"
			}, 
			{
				id: 3, name: "Chebyk", avatar: "https://avatars.mds.yandex.net/i?id=c0af03d8a700afe7908e5009a26fe603cce5718e-7465150-images-thumbs&n=13",
			}, 
			{
				id: 4, name: "Pavel", avatar: "https://avatars.mds.yandex.net/i?id=a943e13081c75211c43a97365752161a_l-9847423-images-thumbs&n=13",
			}, 
			{
				id: 5, name: "Sasha", avatar: "https://avatars.mds.yandex.net/i?id=04c7228c8c1e13067243bfe9329a39cd_l-5714482-images-thumbs&n=13",
			}
		],
		newMessagesDialogs: 'Hey, Yo-Yo-yo',
	},
	sidebar: {
		friends: [
			{
					id: 1, name: "Lev",  avatar: "https://i.pinimg.com/736x/6b/1c/a0/6b1ca024d03114fc1ebd1299f6e99762.jpg",
			}, 
			{
					id: 2, name: "Evgenich", avatar: "https://i.pinimg.com/736x/1c/7f/de/1c7fdec8485d8c11a4b13617b8bf5285.jpg"
			}, 
			{
					id: 3, name: "Chebyk", avatar: "https://avatars.mds.yandex.net/i?id=c0af03d8a700afe7908e5009a26fe603cce5718e-7465150-images-thumbs&n=13",
			},
		]
	}
}

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
		avatar: "https://i.pinimg.com/736x/6b/1c/a0/6b1ca024d03114fc1ebd1299f6e99762.jpg",
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export let addDialogs = () => {
	let newDialogs ={
		id: 5,
		message: state.dialogsPage.newMessagesDialogs,
		avatar:"https://i.pinimg.com/736x/1c/7f/de/1c7fdec8485d8c11a4b13617b8bf5285.jpg", 
	}
	state.dialogsPage.messages.push(newDialogs)
	state.dialogsPage.newMessagesDialogs = '';
	rerenderEntireTree(state)
}
export let updateNewMessagesDialogs = (newText) => {
	state.dialogsPage.newMessagesDialogs = newText;
	rerenderEntireTree(state)
}

export default state