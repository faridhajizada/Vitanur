import { useState } from "react";
import { useTodos } from "../../context/TodoContext";
import { useAuth } from "../../context/AuthContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();
  const { username } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { text, author: username },
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New Task"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Добавить
      </button>
    </form>
  );
};
