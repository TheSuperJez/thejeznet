import React from 'react';
import PropTypes from 'prop-types';

const Title = ({icon, titulo, subtitulo}) => {
	return (
		<div>
			<div className="secTitle">
				<h1>
					<i className={icon} />
					{titulo}
				</h1>
				<p>
					{subtitulo}
				</p>

			</div>
		</div>
	);
};

Title.propTypes = {
	icon: PropTypes.string.isRequired,
	titulo: PropTypes.string.isRequired,
	subtitulo: PropTypes.string.isRequired
};


export default Title;
