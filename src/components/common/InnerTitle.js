import React from 'react';
import PropTypes from 'prop-types';

const InnerTitle = ({titulo, subtitulo}) => {
	return (
		<div className="innerTitle">
			<h1>
				{titulo}
					</h1>
			<p>
				{subtitulo}
					</p>
		</div>
	);
};

InnerTitle.propTypes = {
	titulo: PropTypes.string.isRequired,
	subtitulo: PropTypes.string.isRequired
};

export default InnerTitle;
