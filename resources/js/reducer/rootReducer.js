const initialState = {
    auth:false,
    todos: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "AUTH": return {...state, auth: !state.auth};
        case "TODO":
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}
