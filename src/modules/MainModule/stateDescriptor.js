import Immutable from 'immutable';

export const Menu = Immutable.Record({
	text: '',
	href: '',
	target: null
});

export const Skill = Immutable.Record({
	title: '',
	percent: ''
});

export const Work = Immutable.Record({
	nombre: '',
	posicion: '',
	de: '',
	a: '',
	descripcion: ''
});


export const Study = Immutable.Record({
	nombre: '',
	grado: '',
	fecha: ''
});


export const Testimonal = Immutable.Record({
	mensaje: '',
	autor: ''
});


export const PortfolioFilter = Immutable.Record({
	className: '',
	text: ''
});

export const Portfolio = Immutable.Record({
	id: '',
	cat: '',
	img: '',
	imgLarge: '',
	title: '',
	description: ''
});

export const Form =  Immutable.Record({
	name: '',
	email: '',
	subject: '',
	message: ''
});
