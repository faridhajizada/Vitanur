import { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const loadState = () => {
  try {
    const saved = localStorage.getItem("todoApp");
    return saved
      ? JSON.parse(saved)
      : {
          todos: [],
          filter: "all",
        };
  } catch {
    return {
      todos: [],
      filter: "all",
    };
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            author: action.payload.author,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, loadState());

  useEffect(() => {
    localStorage.setItem("todoApp", JSON.stringify(state));
  }, [state]);

  const filteredTodos = state.todos.filter((todo) => {
    switch (state.filter) {
      case "completed":
        return todo.completed;
      case "active":
        return !todo.completed;
      default:
        return true;
    }
  });

  return (
    <TodoContext.Provider
      value={{
        ...state,
        filteredTodos,
        dispatch,
      }}
    >
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
