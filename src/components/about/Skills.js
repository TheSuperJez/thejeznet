import InnerTitle from '../common/InnerTitle';
import React from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

const Skills = ({skillList}) => {
	return (
		<div id="skills" className="clearfix ">
			<div className="divider">
				<span>
					<i className="icon-star-filled" />
				</span>
			</div>

			<InnerTitle titulo="Technical Skills" subtitulo="Main skills for software development" />

			<div className="skillsHolder clearfix top nBottom ">


				<div className="skills column">
					{skillList.map(function(skill, index) {
						return (
							<Skill key={'skill-'+index} title={skill.title} percent={skill.percent} />
						);
					})}
					

				</div>

				<div className="textWidget column">
					<h1>
						{'Profile'}
					</h1>
					<p>
						{'IT professional with 10 years experience as lead programmer in Web, desktop, ' +
						'and mobile applications in many platforms such as Java, Javascript and .NET for enterprise and innovative startups. Also, ' +
						'i am instructor for corporative training and certification courses with excellent written and oral communication skills; ' +
						'capable of explaining complex software issues in easy-to-understand terms. I also have M.Sc (Computer Science) from Universidad del Estado de México. ' +
						'My Personal skills include strong drive to succeed, fast learning, excellent problem solving and analytical skills, i enjoy working with people and being part of a team.'}
					</p>
				</div>
			</div>
		</div>
	);
};

Skills.propTypes = {
	skillList: PropTypes.array
};

export default Skills;
