import React from 'react';
import PropTypes from 'prop-types';

import { changeFormInput, sendMail } from '../modules/MainModule/mainModule';

import About from '../components/about/Index';
import Contact from '../components/contact/Index';
import Footer from '../components/footer/Index';
import MainHeader from '../components/MainHeader';
import Portfolio from '../components/portfolio/Index';
import Preloader from '../components/Preloader';
import Resume from '../components/resume/Index';
import Teaser from '../components/Teaser';
import Testimonials from '../components/testimonials/Index';
import { connect } from 'react-redux';

class MainContainer extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.changeInputs = this.changeInputs.bind(this);
		this.sendMail = this.sendMail.bind(this);
	}

	sendMail(e) {
		e.preventDefault();
		this.props.sendMail(this.props.form.name,
							this.props.form.email,
							this.props.form.subject,
							this.props.form.message);

	}

	changeInputs(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.props.changeFormInput(name, value);
	}
	render() {
		return (
			<div>
				<MainHeader menuList={this.props.menuList} />
				<Teaser />
				<Preloader />
				<About skillList={this.props.skillList} />
				<Resume workList={this.props.workList} studyList={this.props.studyList} />
				<Testimonials testimonialList={this.props.testimonialList} />
				<Portfolio
					portFolioFilterList={this.props.portFolioFilterList}
					portfolioList={this.props.portfolioList} />
				<Contact form={this.props.form} changeFormInput={this.changeInputs} sendMail={this.sendMail} />
				<Footer />
			</div>
		);
	}
}

MainContainer.propTypes = {
	children: PropTypes.object,
	loadQuestions: PropTypes.func,
	menuList: PropTypes.array,
	skillList: PropTypes.array,
	workList: PropTypes.array,
	studyList: PropTypes.array,
	testimonialList: PropTypes.array,
	portFolioFilterList: PropTypes.array,
	portfolioList: PropTypes.array,
	form: PropTypes.object,
	changeFormInput: PropTypes.func,
	sendMail: PropTypes.func
};

function mapStateToProps(state) {
	return {
		menuList: state.mainModule.get('menuList').toJS(),
		skillList: state.mainModule.get('skillList').toJS(),
		workList: state.mainModule.get('workList').toJS(),
		studyList: state.mainModule.get('studyList').toJS(),
		testimonialList: state.mainModule.get('testimonialList').toJS(),
		portFolioFilterList: state.mainModule.get('portFolioFilterList').toJS(),
		portfolioList: state.mainModule.get('portfolioList').toJS(),
		form: state.mainModule.get('form').toJS()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeFormInput: (name, value) => dispatch(changeFormInput(name, value)),
		sendMail: (name, from, subject, text) => dispatch(sendMail(name, from, subject, text)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
