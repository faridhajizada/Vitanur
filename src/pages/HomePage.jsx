import { TodoForm } from '../components/TodoForm/TodoForm';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoFilter } from '../components/TodoFilter/TodoFilter';
import { TodoStats } from '../components/TodoStats/TodoStats';

export const HomePage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Todo App</h1>
      <TodoForm />
      <TodoStats />
      <TodoFilter />
      <TodoList />
    </div>
  );
};