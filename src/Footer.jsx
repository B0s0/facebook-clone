import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ReorderIcon from '@material-ui/icons/Reorder';
import './Footer.css';


function Footer() {
	return (
		<div className="footer">
			<div className="footer_icon footer_icon--active">
				<HomeIcon fontSize="large" />
			</div>
			<div className="footer_icon">
				<SubscriptionsOutlinedIcon fontSize="large" />
			</div>
			<div className="footer_icon">
				<SupervisedUserCircleIcon fontSize="large" />
			</div>
			<div className="footer_icon">
				<NotificationActiveIcon fontSize="large" />
			</div>
			<div className="footer_icon">
				<ReorderIcon fontSize="large" />
			</div>
		</div>
	)
}

export default Footer;