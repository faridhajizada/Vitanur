import './TodoList.css';

export const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <span className="todo-author">Author:  {  todo.author}</span>
      <br />
      <span className="todo-text">{todo.text}</span>
    </div>
  );
};