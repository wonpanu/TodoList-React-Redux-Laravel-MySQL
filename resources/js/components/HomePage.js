import React from "react";
import TodoListPage from "./TodoListPage";

export default function HomePage() {
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
