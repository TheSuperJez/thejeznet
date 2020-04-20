import PropTypes from 'prop-types';
import React from 'react';

const MainHeader = ({ menuList }) => {
	return (
		<header id="header" className="clearfix">

			<div className=" holder960">

				<a href="wsdindex.html#" className="mobileBtn">
					<i className="icon-menu" />
				</a>
				<nav id="mainNav">
					<ul>
						{menuList.map(function (menuItem, index) {
							return (
								<li key={index}><a href={menuItem.href} target={menuItem.target}>
									{menuItem.text}
								</a></li>
							);
						})}
					</ul>

				</nav>
			</div>
		</header>
	);
};

MainHeader.propTypes = {
	menuList: PropTypes.array.isRequired
};

export default MainHeader;
