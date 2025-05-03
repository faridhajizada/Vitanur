import { useState } from "react";
import { useTodos } from "../../context/TodoContext";
import { useAuth } from "../../context/AuthContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useTodos();
  const { username } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Write your task");
      return;
    }

    if (!username) {
      setError("Write your name");
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: { text, author: username },
    });
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
          placeholder="New task"
          className={`todo-input ${error ? "error" : ""}`}
        />
        <button type="submit" className="add-button">
          Добавить
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};
