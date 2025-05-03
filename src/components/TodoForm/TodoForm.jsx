import { useState } from "react";
import { useTodos } from "../../context/TodoContext";
import { useAuth } from "../../context/AuthContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useTodos();
  const { username } = useAuth();

  const validateTask = (taskText) => {
    if (!taskText.trim()) return "Task cannot be empty";
    if (taskText.length < 3) return "Minimum 3 characters required";
    if (taskText.length > 50) return "Maximum 50 characters allowed";
    if (/\d/.test(taskText)) return "Numbers are not allowed in tasks";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setError("Please enter your name first");
      return;
    }

    const validationError = validateTask(text);
    if (validationError) {
      setError(validationError);
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: { text: text.trim(), author: username },
    });
    setText("");
    setError("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, "").slice(0, 50);

    setText(value);
    if (error) setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="New task (3-50 letters, no numbers)"
          className={`todo-input ${error ? "error" : ""}`}
          autoFocus
        />
        <button
          type="submit"
          className="add-button"
          disabled={text.trim().length < 3 || text.trim().length > 50}
        >
          Add
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};
