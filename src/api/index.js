import axios from 'axios';

export const sendMail = (name, from, subject, message) => {
	axios.post('http://thejez.net/mailer/mail.php', {
		name,
		from,
		subject,
		message
	})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
