import { useTodos } from "../../context/TodoContext";
import "./TodoFilter.css";

export const TodoFilter = () => {
  const { filter, dispatch } = useTodos();

  const buttons = [
    { type: "all", label: "All" },
    { type: "active", label: "Active" },
    { type: "completed", label: "Completed" },
  ];

  return (
    <div className="filter-buttons">
      {buttons.map(({ type, label }) => (
        <button
          key={type}
          className={`filter-button ${filter === type ? "active" : ""}`}
          onClick={() => dispatch({ type: "SET_FILTER", payload: type })}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
