import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import InnerTitle from '../common/InnerTitle';
import Title from '../common/Title';

const Index = ({ form, changeFormInput, sendMail }) => {
	return (
		<section id="contact" className="clearfix section">
			<Title icon="icon-mail" titulo="Contact" subtitulo="Get in touch with me" />
			<div className="holder960 clearfix">
				<div className="contactContainer">
					<InnerTitle titulo="Message" subtitulo="Send a message and i will contact you" />
					<Form form={form} changeFormInput={changeFormInput} sendMail={sendMail} />
				</div>
			</div>
		</section>
	);
};

Index.propTypes = {
	form: PropTypes.object,
	changeFormInput: PropTypes.func,
	sendMail: PropTypes.func
};

export default Index;
