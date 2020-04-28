import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import axios from "axios";

export default function TodoListPage() {
    const dispatch = useDispatch();
    const HandleClick = () => {
        axios
            .post("/api/logout")
            .then(res => {
                console.log("res@logout: ", res);
            })
            .catch(err => {
                console.log("err@logout: ", err);
            });
        dispatch({ type: "SIGNOUT" });
    };

    return (
        <div>
            <h1 style={{ margin: "4%", fontWeight: "bold" }}>
                Todo list
                <Link to="/" style={{ margin: 30 }} onClick={HandleClick}>
                    logout
                </Link>
            </h1>
            <div style={{ margin: "0% 0% 10% 10%" }}>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}
