import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ portFolioFilterList }) => {
	return (
		<div className="filterNav">
			<ul id="category" className="filter">
				{portFolioFilterList.map(function (portFolioFilter, index) {
					return (
						<li key={'portfolio-' + index}
							className={portFolioFilter.className}>
							<a href="#">{portFolioFilter.text}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Filter.propTypes = {
	portFolioFilterList: PropTypes.array
};

export default Filter;
