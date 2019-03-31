import type from '../constans/actions/characters'

const _initialState = () => ({
    allCharacters: null,
    loading: false
});

const _setAllCharacters = (state, {allCharacters, loading}) => ({...state, allCharacters, loading});
const _setLoading = (state, {loading}) => ({...state, loading});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_CHARACTER_SEARCH_SUCCESS:
            return _setAllCharacters(state, action);
        case type.FETCH_CHARACTER_SEARCH_REQUEST:
        case type.FETCH_CHARACTER_SEARCH_ERROR:
            return _setLoading(state, action);
        default:
            return state;
    }
};