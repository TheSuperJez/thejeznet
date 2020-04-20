import React from 'react';
import PropTypes from 'prop-types';

import Escuela from './Escuela';

const Educacion = ({ studyList }) => {
	return (
		<div className="edHolder top clearfix">
			<div className="innerEd clearfix">
				{studyList.map(function (study, index) {
					return (
						<Escuela key={'escuela-' + index}
							nombre={study.nombre}
							grado={study.grado}
							fecha={study.fecha} />
					);
				})}
			</div>
		</div>
	);
};


Educacion.propTypes = {
	studyList: PropTypes.array
};


export default Educacion;
