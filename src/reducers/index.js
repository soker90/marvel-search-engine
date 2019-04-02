import {combineReducers} from 'redux';
import characters        from './characters';
import notifications     from './notifications';

const rootReducer = combineReducers({
	characters, notifications,
});

export default rootReducer
