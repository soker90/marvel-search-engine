import {connect}          from 'react-redux'
import SearchView         from './SearchView';
import {fetchCharacters}  from '../../actions/characters';
import {sendNotification} from '../../actions/notifications'
import {withSnackbar}     from 'notistack';

export const mapStateToProps = state => ({
	...state.characters, ...state.notifications,
});

export const mapDispatchToProps = dispatch => ({
	fetchCharacters: (character) => dispatch(fetchCharacters(character)),
	sendNotification: (enqueueSnackbar, message, status) => dispatch(sendNotification(enqueueSnackbar, message, status)),
});

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(SearchView))
