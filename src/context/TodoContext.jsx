import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD': return [...state, action.payload];
    case 'TOGGLE': return state.map(todo =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    );
    case 'REMOVE': return state.filter(todo => todo.id !== action.payload);
    default: return state;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => useContext(TodoContext);