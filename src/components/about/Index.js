import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';
import InnerTitle from '../common/InnerTitle';
import Skills from './Skills';
import Title from '../common/Title';
import UserProfile from './UserProfile';

const Index = ({skillList}) => {
	return (
		<section id="about" className="clearfix ">
			<Title icon="icon-user" titulo="About" subtitulo="Get to know me" />
			<div className="holder960 clearfix">
				<InnerTitle titulo="Me" subtitulo=" Artificial Inteligence, WebUI, Backend, Security" />
				<UserProfile />
				<Skills skillList={skillList} />
				<Info />
			</div>
		</section>
	);
};

Index.propTypes = {
	skillList: PropTypes.array.isRequired
};

export default Index;
