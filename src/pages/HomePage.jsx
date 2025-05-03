import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoStats } from "../context/TodoStats";

export const HomePage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Todo App</h1>
      <TodoForm />
      <TodoStats />
      <TodoList />
    </div>
  );
};
