import PropTypes from 'prop-types';
import React from 'react';

const Project = ({ id, cat, img, title, description, imgLarge }) => {
	return (
		<li data-id={id} data-type={cat} className="item  ">
			<div className="browserBar">
				<span className="browserDot" />
				<span className="browserDot" />
				<span className="browserDot" />
			</div>
			<div className="folioImg">
				<img src={img} alt="" />
			</div>


			<div className="workDesc">
				<h3>{title}<br /><span>{description}</span></h3>
				<a className="prev" href={imgLarge}><i className="icon-search" /></a>
				</div>


		</li>
	);
};

Project.propTypes = {
	id: PropTypes.string.isRequired,
	cat: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imgLarge: PropTypes.string.isRequired
};

export default Project;
