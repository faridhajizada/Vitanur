import { useTodos } from '../../context/TodoContext';
import './TodoList.css';

export const TodoItem = ({ todo }) => {
  const { dispatch } = useTodos();
  
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          className="todo-checkbox"
        />
        <span className="todo-author">{todo.author}:</span>
        <br />
        <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        className="delete-button"
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
      >
        ×
      </button>
    </div>
  );
};