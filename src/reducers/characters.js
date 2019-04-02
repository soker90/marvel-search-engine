import type from '../constans/actions/characters'

const _initialState = () => ({
    allCharacters: [],
    loading: false
});

const _setAllCharacters = (state, {allCharacters, loading}) => ({...state, allCharacters, loading});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_CHARACTER_SEARCH_SUCCESS:
        case type.FETCH_CHARACTER_SEARCH_REQUEST:
        case type.FETCH_CHARACTER_SEARCH_ERROR:
            return _setAllCharacters(state, action);
        default:
            return state;
    }
};
