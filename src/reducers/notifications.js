import characters    from '../constans/actions/characters'
import notifications from '../constans/actions/notifications';

const _initialState = () => ({
	message: null,
	status: null,
});

const _setMessage = (state, {message, status}) => ({
	...state,
	message,
	status,
});

export default (state = _initialState(), action) => {
	switch (action.type) {
		case notifications.CLEAR_MESSAGE:
		//case characters.FETCH_CHARACTER_SEARCH_REQUEST:
		case characters.FETCH_CHARACTER_SEARCH_ERROR:
			return _setMessage(state, action);
		default:
			return state;
	}
};

