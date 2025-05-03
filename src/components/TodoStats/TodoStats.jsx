import { useTodos } from "../../context/TodoContext";

export const TodoStats = () => {
  const { todos } = useTodos();

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div
      className="todo-stats"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "5px",
      }}
    >
      <div>Total: {total}</div>
      <div>Completed: {completed}</div>
    </div>
  );
};
