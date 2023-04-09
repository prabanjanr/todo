import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";

function Todotas({ todos, updateTodo, removeTodo, completeTodo }) {
  const [data, setData] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    updateTodo(data.id, value);
    setData({
      id: null,
      value: "",
    });
  };
  if (data.id) {
    return <TodoForm data={data} onSubmit={submitUpdate} />;
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-complete" : "todo-container"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiDeleteBin5Fill
              onClick={() => removeTodo(todo.id)}
              className="deleteicon"
            />
            <GrEdit
              onClick={() => setData({ id: todo.id, value: todo.text })}
              className="gricon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todotas;
