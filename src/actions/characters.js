import charactersActions from '../constans/actions/characters';
import fetchService      from '../services/fetchService';
import Config            from '../constans/config'

const _fetchCharactersRequest = () => ({
	type: charactersActions.FETCH_CHARACTER_SEARCH_REQUEST,
	//message: 'Buscando personajes...',
	//status: 'info',
	loading: true,
	allCharacters: [],
});

const _fetchCharactersSuccess = ({data}) => {
	let allCharacters = data.results.map(item => ({
		name: item.name,
		thumbnail: `${item.thumbnail.path}/landscape_incredible.${item.thumbnail.extension}`,
		description: item.description,
	}));

	return ({
		type: charactersActions.FETCH_CHARACTER_SEARCH_SUCCESS,
		loading: false,
		allCharacters: allCharacters,
	});
};

const _fetchCharactersError = ({message}) => ({
	type: charactersActions.FETCH_CHARACTER_SEARCH_ERROR,
	message,
	status: 'error',
	loading: false,
	allCharacters: [],
});

/**
 * Solicita los personajes que empiezan con las letras dadas
 * @param character
 * @returns {*}
 */
export const fetchCharacters = character =>
	fetchService({
			method: 'GET',
			url: `${Config.API_URL}characters?limit=12&nameStartsWith=${character}&apikey=${Config.API_KEY}&ts=1&hash=${Config.API_HASH}`,
		},
		_fetchCharactersRequest,
		_fetchCharactersSuccess,
		_fetchCharactersError,
	);
