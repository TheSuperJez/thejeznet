import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import { connect } from 'react-redux';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		const {pathname} = this.props.location;
		const regex = new RegExp('.*vcard.*');
		if(!regex.test(pathname)) {
			this.props.history.push('/vcard');
		}
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object,
	location: PropTypes.shape({pathname: PropTypes.string}),
	history: PropTypes.shape({push: PropTypes.func}),
};

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(props => <App {...props}/>));
