import React from 'react';
import profileImage from '../../../static/images/profile.jpg';

const UserProfile = () => {
	return (
		<div className="userProfile top nBottom">
			<div className="imgProfile">
				<img src={profileImage} width="200" height="200" alt="" />
			</div>
			<div className="getBtn">
				<div className="ico"><a href="https://www.linkedin.com/in/jorge-e-zaragoza-s" target="_blank"><i className="icon-linkedin" /></a>
				</div>
				<div className="ico"><a href="https://drive.google.com/open?id=1-cQhwtzhUsAZsaOXKtwBOBgUTwy4VK7Q" target="_blank">
					<i className="icon-download" /></a>
				</div>
				<h3>
					{'CV'}
				</h3>
			</div>

			<div className="followBtn">
				<div className="ico"><a href="http://facebook.com/thesuperjez" className="fb" target="_blank">
					<i className="icon-facebook" /></a>
				</div>

				<div className="ico"><a className="tw" href="http://twitter.com/thesuperjez" target="_blank">
					<i className="icon-twitter" /></a>
				</div>
				<h3>
					{'Follow me'}
				</h3>
			</div>
		</div>
	);
};

export default UserProfile;
