import { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const loadTodos = () => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.payload.text,
          author: action.payload.author,
        },
      ];
    default:
      return todos;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], loadTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
