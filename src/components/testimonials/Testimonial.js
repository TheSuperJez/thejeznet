import PropTypes from 'prop-types';
import React from 'react';

const Testimonial = ({ testimonial, author }) => {
	return (
		<div className="testi ">
			<blockquote>{testimonial}</blockquote>

			<div className="testiProfile">
				<div className="icoQuote"><i className="icon-quote-right" /></div>
				<div className="nameProfile">
					<h3>{author}</h3>
				</div>
			</div>
		</div>
	);
};

Testimonial.propTypes = {
	testimonial: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default Testimonial;
