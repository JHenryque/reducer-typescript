import { createContext, useReducer, Dispatch } from "react";
import { Todo, Action } from "../types";
//import { todoReducer, initialState } from "./reducer";

interface TodoContextProps {
  state: Todo[];
  dispatch: Dispatch<Action>;
}

export const initialState: Todo[] = [
  { id: 1, text: "Estudar React com TypeScript" },
  { id: 2, text: "Fazer exercícios com useReducer" },
];

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export default function TodoProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
