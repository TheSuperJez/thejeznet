import React from 'react';
import PropTypes from 'prop-types';

import Testimonial from './Testimonial';

const Index = ({ testimonialList }) => {
	return (
		<section id="testimonials">
			<div className="testimoniaContainer">
				<div className="overlay">
					<div className="holder960 clearfix">
						<div className="testimonialContent">
							{testimonialList.map(function (testimonial, index) {
								return (
									<Testimonial key={'testimonial-' + index} testimonial={testimonial.mensaje}
										author={testimonial.autor} />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Index.propTypes = {
	testimonialList: PropTypes.array
};

export default Index;
