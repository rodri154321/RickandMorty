const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: actions.payload, allCharacters: actions.payload };
        case 'REMOVE_FAV':
                return { ...state, myFavorites: actions.payload };
        case "FILTER":
            const characterFilter = state.allCharacters.filter(char => char.gender === actions.payload)
            return {
                ...state,
                myFavorites: characterFilter 
            }
        case "ORDER":
                return {
                    ...state,
                    myFavorites: 
                    actions.payload === "A"
                    ? state.allCharacters.sort((a, b) => { return a.id - b.id })
                    : state.allCharacters.sort((a, b) => { return b.id - a.id })
                }

        default: return { ...state }
    }
};

export default reducer;