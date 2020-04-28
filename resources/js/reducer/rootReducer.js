const initialState = {
    auth: false,
    todos: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SIGNIN":
            return { ...state, auth: true };
        case "TODO":
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}
