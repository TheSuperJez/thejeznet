import React from 'react';
import PropTypes from 'prop-types';

const Escuela = ({ nombre, grado, fecha }) => {
	return (

		<div className="ed column">
			<div className="edIco"><i className="icon-graduation-cap" /></div>
			<div className="edDesc">
				<h3>
					{nombre}
				</h3>
				<h2>
					{grado}
				</h2>
				<h6>
					{fecha}
				</h6>
			</div>
		</div>
	);
};

Escuela.propTypes = {
	nombre: PropTypes.string.isRequired,
	grado: PropTypes.string.isRequired,
	fecha: PropTypes.string.isRequired
};

export default Escuela;
