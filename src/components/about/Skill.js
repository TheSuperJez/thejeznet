import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ title, percent }) => {
	let percentNumber = percent.substring(0, percent.lastIndexOf('%'));
	return (
		<div className="skillBar">
			<div className="skillbarHolder">
				<div className="skillbarTitle">{title}</div>
				<div className={'percentage percent' + percentNumber}><span>{percent}</span></div>
			</div>
		</div>
	);
};

Skill.propTypes = {
	title: PropTypes.string.isRequired,
	percent: PropTypes.string.isRequired
};

export default Skill;
