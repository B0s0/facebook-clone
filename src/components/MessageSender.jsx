import React, {useState} from 'react';
import '../styles/MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../utils/StateProvider';
import db from '../firebase';
import firebase from 'firebase';
import useWindowSize from '../utils/useWindowSize';
import SendRoundedIcon from '@material-ui/icons/SendRounded';


function MessageSender() {
	const [{user}, dispatch] = useStateValue();
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const { width } = useWindowSize();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (input || imageUrl) {

			db.collection('posts').add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				profilePic: user.photoURL,
				username: user.displayName,
				image: imageUrl,
			});
		} else {
			alert('Please enter something in either of the field :)')
		}

		setInput('')
		setImageUrl('')
	}
	return (
		(width <= 500) ? (
			<div className='messageSender' style={{"width": "95%"}}>
				<div className='messageSender_top'>
					<Avatar src={user.photoURL} />
					<form style={{display: "flex", "flex-direction": "column"}}>
						<input style={{"padding": "10px 10px", "padding-bottom": "5px"}} value={input} onChange={(e) => setInput(e.target.value)} placeholder={`What's on your mind? ${user.displayName}`} className="messageSender_input" />
						<input style={{"padding": "10px 10px"}} value={imageUrl} placeholder={"image url (Optional)"} onChange={(e) =>setImageUrl(e.target.value)} />
					</form>
				</div>
				<div style={{"justify-content": "center", "justify-content": "space-evenly"}} className='messageSender_bottom'>
					<div className='messageSender_option' style={{"padding": "10px 30px", "width": "30px"}}>
						<VideocamIcon style={{ color: "red" }} />
						{/*<h3>Live Video</h3>*/}
					</div>
					<div className='messageSender_option'>
						<PhotoLibraryIcon style={{ color: "green" }} />
						{/*<h3>Photo/Video</h3>*/}
					</div>
					<div className='messageSender_option'>
						<InsertEmoticonIcon style={{ color: "orange" }} />
						{/*<h3>Feeling/Activity</h3>*/}
					</div>
					<button onClick={handleSubmit} type="submit" style={{border: "none", "background-color": "white"}}> 
						<SendRoundedIcon style={{ color: "#2e81f4"}}/>
					</button>				
				</div>
			</div>
		) : (

			<div className='messageSender'>
				<div className='messageSender_top'>
					<Avatar src={user.photoURL} />
					<form>
						<input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`What's on your mind? ${user.displayName}`} className="messageSender_input" />
						<input value={imageUrl} placeholder={"image url (Optional)"} onChange={(e) =>setImageUrl(e.target.value)} />
						<button onClick={handleSubmit} type="submit"> 
							Hidden Submit 
						</button>
					</form>
				</div>
				<div className='messageSender_bottom'>
					<div className='messageSender_option'>
						<VideocamIcon style={{ color: "red" }} />
						<h3>Live Video</h3>
					</div>
					<div className='messageSender_option'>
						<PhotoLibraryIcon style={{ color: "green" }} />
						<h3>Photo/Video</h3>
					</div>
					<div className='messageSender_option'>
						<InsertEmoticonIcon style={{ color: "orange" }} />
						<h3>Feeling/Activity</h3>
					</div>
				</div>
			</div>
		)
	)
}

export default MessageSender;

//messagesender sakyeko xa baki bholi 