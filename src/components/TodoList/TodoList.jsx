import { useTodos } from "../../context/TodoContext";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = () => {
  const { filteredTodos } = useTodos();

  return (
    <div className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
