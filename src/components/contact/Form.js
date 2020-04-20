import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ form, changeFormInput, sendMail }) => {

	return (
		<div className="contactHolder top">
			<div className="contactForm clearfix">
				<form className="form clearfix" onSubmit={sendMail} method="post" action="https://api.mailgun.net/v3/sandboxe7e4ae9bbc92434db35762f675c3c9f3.mailgun.org/messages"  >

					<div className="inputBox">
						<label>{'Name *'}</label>
						<input type="text" id="name" name="name" onChange={changeFormInput} value={form.name} />
					</div>

					<div className="inputBox">
						<label>{'Email *'}</label>
						<input type="text" name="email" id="email" onChange={changeFormInput} value={form.email} />
					</div>

					<div className="inputBox last">
						<label>{'Subject '}</label>
						<input type="text" name="subject" onChange={changeFormInput} value={form.subject} />
					</div>

					<div className="inputBox msg">
						<label>{'Message *'}</label>
						<textarea name="message" id="message" onChange={changeFormInput} value={form.message} />
					</div>
					<input type="submit" className="submit" id="submit" value="Send Message" name="submit" />
				</form>
			</div>
			<div className="clearfix" />
		</div>
	);
};

Form.propTypes = {
	form: PropTypes.object,
	changeFormInput: PropTypes.func,
	sendMail: PropTypes.func
};

export default Form;
