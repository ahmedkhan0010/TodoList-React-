import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, description: "Buy groceries", assignedTo: "Alice" },
    { id: 2, description: "Work on html", assignedTo: "Ahmed" },
    { id: 3, description: "Read a book", assignedTo: "Alice" },
    { id: 4, description: "charge phone battary", assignedTo: "Alice" },
  ]);

  const handleAddTodo = (descriptionval: string, assignedToval: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].id + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      id: rowNumber,
      description: descriptionval,
      assignedTo: assignedToval,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    let filterred = todos.filter(function (value) {
      return value.id !== id;
    });
    setTodos(filterred);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Add New Todo"}
          </button>

          {showForm && <NewTodoForm handleAddTodo={handleAddTodo} />}
        </div>
      </div>
    </div>
  );
};
