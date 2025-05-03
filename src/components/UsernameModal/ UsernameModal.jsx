import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./UsernameModal.css";

export const UsernameModal = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const validateUsername = (name) => {
    if (name.length < 3) return "Name must be at least 3 characters";
    if (name.length > 16) return "Name cannot exceed 16 characters";
    if (/\d/.test(name)) return "Name cannot contain numbers";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateUsername(input.trim());

    if (validationError) {
      setError(validationError);
      return;
    }

    login(input.trim());
  };

  const handleInputChange = (e) => {
    const value = e.target.value
      .replace(/[^a-zA-Zа-яА-ЯёЁ\s]/gi, "")
      .slice(0, 16);

    setInput(value);

    if (error) setError("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Write your name</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Name (3-16 letters)"
            className={error ? "error-input" : ""}
            autoFocus
          />
          {error && <div className="error-message">{error}</div>}
          <button
            type="submit"
            disabled={input.trim().length < 3}
            className={input.trim().length < 3 ? "disabled-button" : ""}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
