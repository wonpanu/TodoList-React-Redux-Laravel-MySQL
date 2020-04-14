import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function TodoListPage() {
    return (
        <div>
            <h1 style={{ margin: "4%", fontWeight: "bold" }}>Todo list</h1>
            <div style={{ margin: "0% 0% 10% 10%" }}>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}
