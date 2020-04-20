import React from 'react';
import PropTypes from 'prop-types';

import Empleo from './Empleo';

const Empleos = ({ workList }) => {
	return (
		<div className="emHolder top clearfix">
			<div className="innerEm clearfix">
				{workList.map(function (empleo, index) {
					return (
						<Empleo key={'empleo-' + index} nombre={empleo.nombre} posicion={empleo.posicion}
							de={empleo.de} a={empleo.a} descripcion={empleo.descripcion} />
					);
				})}
			</div>
		</div>
	);
};

Empleos.propTypes = {
	workList: PropTypes.array
};

export default Empleos;
