import React from 'react';

const Preloader = () => {
	return (
		<div id="loader">
			<div id="loaderInner">
				<h1>{'WebPage'}</h1>
				<p className="loading">{'is loading...'}</p>
			</div>
		</div>
	);
};

export default Preloader;
