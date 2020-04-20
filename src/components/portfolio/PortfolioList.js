import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';

const PortFolioList = ({ portfolioList }) => {
	return (
		<ul className="portfolio clearfix ">
			{portfolioList.map(function (porfolio, index) {
				return (
					<Project key={'portfolio-' + index}
						id={porfolio.id}
						cat={porfolio.cat}
						img={porfolio.img}
						imgLarge={porfolio.imgLarge}
						title={porfolio.title}
						description={porfolio.description} />
				);
			})}

		</ul>
	);
};

PortFolioList.propTypes = {
	portfolioList: PropTypes.array
};


export default PortFolioList;
