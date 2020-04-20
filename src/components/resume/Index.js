import React from 'react';
import PropTypes from 'prop-types';

import Educacion from './Educacion';
import Empleos from './Empleos';
import InnerTitle from '../common/InnerTitle';
import Title from '../common/Title';

const Index = ({workList, studyList}) => {
	return (
		<section id="resume" className="clearfix section">
			<Title icon="icon-docs" titulo="Resume" subtitulo="My Carreer Path" />
			<div className="holder960 clearfix">
				<div className="resumeContainer">
					<InnerTitle titulo="Professional career" subtitulo="My work experience" />
					<Empleos workList={workList} />
					<div className="divider"><span><i className="icon-star-filled" /></span></div>
					<InnerTitle titulo="My education" subtitulo="Studies, certifications and courses" />
					<Educacion studyList={studyList} />
				</div>
				<div className="cta">
					<p>{'Conferences, Meetups, talks, projects or ideas?'}<br />
						{'Don’t hesitate feel free to get in '}
						<a href="wsdindex.html#contact">
							{'touch with me'}</a>{'.'}
					</p>
				</div>
			</div>
		</section>
	);
};

Index.propTypes = {
	workList: PropTypes.array,
	studyList: PropTypes.array
};

export default Index;
