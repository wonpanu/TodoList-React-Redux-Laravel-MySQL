import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import TodoListPage from "./TodoListPage";

export default function HomePage() {
    const dispatch = useDispatch();
    const pull = true;

    useEffect(() => {
        axios
            .get("/api/tasks")
            .then(res => {
                dispatch({ type: "TODO", payload: res.data });
            })
            .catch(err => console.log(err));
    }, [pull]);

    return (
        <div class="container">
            <div class="row">
                <div class="col" />
                <div class="col-10">
                    <TodoListPage />
                </div>
                <div class="col" />
            </div>
        </div>
    );
}
