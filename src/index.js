import '../less/main.less';

import { Router, hashHistory } from 'react-router';

import { Provider } from 'react-redux';
import React from 'react';
import _ from 'underscore';
import configureStore from './store';
import jQuery from 'jquery';
import { render } from 'react-dom';
import routes from './routes';

window._ = _;
window.jQuery = jQuery;
window.$ = jQuery;


require('jquery-migrate');
require('jquery-easing');
require('jquery-parallax');
require('jquery.simple-text-rotator');
require('cd-magnificpopup');

const store = configureStore();


render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);

/* render(
	<Provider store={store}>
		<HashRouter routes={routes} />
	</Provider>,
	document.getElementById('app')
); */

