import { TodoForm } from '../components/TodoForm/TodoForm';
import { TodoList } from '../components/TodoList/TodoList';

export const HomePage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};