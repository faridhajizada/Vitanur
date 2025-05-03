import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./UsernameModal.css";

export const UsernameModal = () => {
  const [input, setInput] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) login(input.trim());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Write your name</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Name"
            required
          />
          <button type="submit">Continuous</button>
        </form>
      </div>
    </div>
  );
};
