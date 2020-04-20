import React from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';
import InnerTitle from '../common/InnerTitle';
import PortfolioList from './PortfolioList';
import Title from '../common/Title';

const Portfolio = ({portFolioFilterList, portfolioList}) => {
	return (
		<section id="portfolio" className="clearfix section">
			<Title icon="icon-file-code" titulo="Portfolio" subtitulo="My work" />
			<div className="holder960 clearfix">
				<div className="portfolioContainer">

					<InnerTitle titulo="Checkout my work" subtitulo="Development and writting" />
					<div className="divider"><span><i className="icon-star-filled" /></span></div>
					<Filter portFolioFilterList={portFolioFilterList} />
					<div id="works" className="clearfix">
						<PortfolioList portfolioList={portfolioList} />
					</div>
				</div>
			</div>


		</section>


	);
};

Portfolio.propTypes = {
	portFolioFilterList: PropTypes.array,
	portfolioList: PropTypes.array
};

export default Portfolio;
