import React from 'react';
import '../styles/Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';
import { actionTypes } from '../utils/reducer';
import { useStateValue } from '../utils/StateProvider';

function Login() {
	const [state, dispatch] = useStateValue();
	const signIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			}).catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<div className='login_logo'>
				<img src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512' alt='' />
				<img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
			</div>
			<Button type="submit" onClick={signIn}>
				Sign in 
			</Button>
		</div>
	)
}

export default Login;