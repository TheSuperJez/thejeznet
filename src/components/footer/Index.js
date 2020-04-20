import Copyright from './Copyright';
import Feed from './Feed';
import React from 'react';
import Share from './Share';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="holder960 clearfix">
				<div className="ftTop clearfix">

					<Feed />
					<Share />

				</div>
			</div>

			<Copyright />
		</footer>
	);
};

export default Footer;
