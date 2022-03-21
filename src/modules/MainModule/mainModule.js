import { Form } from './stateDescriptor';
import initialState from '../initialState';
import {sendMail as mail} from '../../api';
export const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';

export default function reducer(state = initialState.get('mainModule'), action) {
	switch (action.type) {
	case CHANGE_FORM_INPUT: {
		let form = state.get('form').toJS();
		let values = { name: form.name, email: form.email, subject: form.subject, message: form.message };
		values[action.parameters.name] = action.parameters.value;
		let newForm = new Form(values);
		newForm.set(action.parameters.name, action.parameters.value);
		return state.set('form', newForm);
	}
	default: return state;
	}
}

export const changeFormInput = (name, value) => {
	return (dispatch) => {
		let parameters = { name, value };
		dispatch({ type: CHANGE_FORM_INPUT, parameters });
	};
};


export const sendMail = (name, from, subject, message) => {
	return () => {
		mail(name, from, subject, message);
	};
};
