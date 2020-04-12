const initialState = {
    todos: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: action.id, todo: action.payload, completed: false }
                ]
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case "DELETE_TODO":
            const newState = state.todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: newState
            };
        default:
            return state;
    }
}
