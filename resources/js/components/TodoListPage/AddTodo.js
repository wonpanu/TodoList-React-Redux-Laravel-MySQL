import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function AddTodo() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    const HandleSubmit = e => {
        e.preventDefault();

        todo !== "" &&
            axios({
                method: "POST",
                url: "/api/tasks",
                data: { title: todo },
                headers: {
                    Authorization: localStorage.getItem("access_token")
                        ? `Bearer ${localStorage.getItem("access_token")}`
                        : `Bearer ${sessionStorage.getItem("access_token")}`
                }
            })
                .then(res => {
                    dispatch({ type: "TODO", payload: res.data });
                })
                .catch(err => console.log(err));
        setTodo("");
    };

    return (
        <form class="form-inline" onSubmit={HandleSubmit}>
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
