import { useTodos } from './TodoContext';

export const TodoStats = () => {
  const { todos } = useTodos();
  
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-stats">
      <div>Total: {total}</div>
      <div>Completed: {completed}</div>
    </div>
  );
};