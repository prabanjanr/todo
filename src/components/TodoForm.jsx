import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState(props.data ? props.data.value : "");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id_create = uuid();
    props.onSubmit({
      id: id_create,
      text: input,
    });
  };
  return (
    <form className="todo">
      {props.data ? (
        <>
          <input
            placeholder="add task...."
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-data"
          />
          <button onClick={handleSubmit} className="databutton">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="add task...."
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-add"
          />
          <button onClick={handleSubmit} className="addbutton">
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
