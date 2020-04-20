import React from 'react';
import PropTypes from 'prop-types';

const Empleo = ({ nombre, posicion, de, a, descripcion }) => {
	return (
		<div className="em" style={{ 'marginTop': '20px', marginLeft: 'auto', marginRight: 'auto' }}>
			<div className="emIco"><i className="icon-briefcase" /></div>
			<div className="emDesc">
				<h3>
					{nombre}
				</h3>
				<h2 style={{ color: '#000000' }}>
					{posicion}
				</h2>
				<h6>
					{de}{' - '}{a}
				</h6>
				<ul>
					{descripcion.map(function (el, index) {
						return (<li key={index + '-job'} style={{
							listStyle: 'initial',
							marginLeft: '1.5rem'
						}}>{el}</li>);
					})}
				</ul>
			</div>
		</div>
	);
};

Empleo.propTypes = {
	nombre: PropTypes.string.isRequired,
	posicion: PropTypes.string.isRequired,
	de: PropTypes.string.isRequired,
	a: PropTypes.string.isRequired,
	descripcion: PropTypes.array.isRequired
};

export default Empleo;
