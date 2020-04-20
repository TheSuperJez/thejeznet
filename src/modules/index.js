import ajaxModule from './ajaxModule';
import {combineReducers} from 'redux';
import mainModule from './MainModule/mainModule';

const rootReducer = combineReducers({
	ajaxModule, 
	mainModule
});

export default rootReducer;
