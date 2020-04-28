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
            .get("/api/logout", {
                headers: {
                    Authorization: localStorage.getItem("access_token")
                        ? `Bearer ${localStorage.getItem("access_token")}`
                        : `Bearer ${sessionStorage.getItem("access_token")}`
                }
            })
            .then(res => {
                alert(res);
                dispatch({ type: "SIGNOUT" });
            })
            .catch(err => {
                alert(err);
            });
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
