import React from 'react';
import "../styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../utils/StateProvider';
import useWindowSize from '../utils/useWindowSize';


function Header() {
	const [{user}, dispatch] = useStateValue();
	const { width } = useWindowSize();

	return (
		<div className="header">
			{width > 500 && (
				<>
					<div className="header_left">
						<img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />
						<div className="header_input">
							<SearchIcon />
							<input placeholder="Search Facebook" type="text" />
						</div>
					</div>

					<div className="header_middle">
						<div className="header_option header_option--active">
							<HomeIcon fontSize="large" />
						</div>	

						<div className="header_option">
							<FlagIcon fontSize="large" />
						</div>

						<div className="header_option">
							<SubscriptionsOutlinedIcon fontSize="large" />
						</div>		
						<div className="header_option">
							<StorefrontOutlinedIcon fontSize="large" />
						</div>
						<div className="header_option">
							<SupervisedUserCircleIcon fontSize="large" />
						</div>
					</div>

					<div className="header_right">
						<div className="header_info">
							<Avatar src={user.photoURL} />
							<h4>{user.displayName}</h4>
							<IconButton>
								<AddIcon />
							</IconButton>
							<IconButton>
								<ForumIcon />
							</IconButton>
							<IconButton>
								<NotificationActiveIcon />
							</IconButton>
							<IconButton>
								<ExpandMoreIcon />
							</IconButton>
						</div>
					</div>
				</>	
			)}
			{width <= 500 && (
				<div style={{display: "flex"}}>
					<div className="header_left" style={{"margin-right": "10px"}}>
						<img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" style={{width: "120px"}} />
					</div>
					<div className="header_mobileSearch">
						<SearchIcon fontSize="large"/>
					</div>
					<div className="header_right">
						<IconButton>
							<ForumIcon />
						</IconButton>
					</div>
				</div>
			)}
		</div>
	)
};

export default Header;


