import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddTodo() {
    const dispatch = useDispatch();
    const [id, setID] = useState(0);
    const [todo, setTodo] = useState("");

    return (
        <form
            class="form-inline"
            onSubmit={e => {
                e.preventDefault();
                todo !== "" &&
                    dispatch({ type: "ADD_TODO", id: id, payload: todo });
                setID(id + 1);
                setTodo("");
            }}
        >
            <div class="form-group" style={{ alignItems: "stretch" }}>
                <input
                    type="text"
                    class="form-control"
                    id="inputText"
                    placeholder="Add new todo"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                    style={{ width: "640px", marginRight: "16px" }}
                />
                <button type="submit" class="btn btn-primary">
                    Add
                </button>
            </div>
        </form>
    );
}
