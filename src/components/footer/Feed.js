import React from 'react';

const Feed = () => {
	return (
		<div className="feed">
			<div><div>{'Powered by: '}</div>
				<a href="https://facebook.github.io/react/" target="_blank"><div className="footer-icon-react" /></a>
				<a href="http://redux.js.org/docs/introduction/" target="_blank"><div className="footer-icon-redux" /></a>
				<a href="https://webpack.github.io/" target="_blank"><div className="footer-icon-webpack" /></a>
			</div>
		</div>
	);
};

export default Feed;
