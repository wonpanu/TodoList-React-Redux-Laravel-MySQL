const initialState = {
    auth: false || localStorage.getItem("access_token"),
    todos: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SIGNIN":
            return { ...state, auth: true };
        case "SIGNOUT":
            return { ...state, auth: false };
        case "TODO":
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}
