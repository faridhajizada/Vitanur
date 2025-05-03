import { useTodos } from '../../context/TodoContext';
import { TodoItem } from './TodoItem';
import './TodoList.css';

export const TodoList = () => {
  const { todos } = useTodos();
  
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};