const initialState = {
    todos: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "TODO":
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}
