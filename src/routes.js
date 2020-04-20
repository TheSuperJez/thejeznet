import App from './components/App';
import MainContainer from './containers/MainContainer';
import React from 'react';
import {Route} from 'react-router';

export default (
	<Route path="/" component={App}>
		<Route path="vcard" component={MainContainer} />
	</Route>
);
