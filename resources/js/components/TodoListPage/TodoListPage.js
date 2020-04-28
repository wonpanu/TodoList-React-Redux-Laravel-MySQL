import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import axios from "axios";

export default function TodoListPage() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const HandleClick = () => {
        axios
            .get("/api/logout", {
                headers: {
                    Authorization:
                        // localStorage.getItem("access_token")
                        //     ? `Bearer ${localStorage.getItem("access_token")}`
                        //     :
                        `Bearer ${sessionStorage.getItem("access_token")}`
                }
            })
            .then(res => {
                alert(res.data.message);
                dispatch({ type: "SIGNOUT" });
                localStorage.clear();
                sessionStorage.clear();
            })
            .catch(err => {
                alert(err);
            });
    };

    return (
        <div>
            <h1 style={{ margin: "4%", fontWeight: "bold" }}>
                Todo list
                <Link style={{ margin: 30 }} onClick={HandleClick}>
                    logout
                    {!auth && <Redirect to="/" />}
                </Link>
            </h1>
            <div style={{ margin: "0% 0% 10% 10%" }}>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}
