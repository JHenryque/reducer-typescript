import { Todo, Action } from "../types";

export const initialState: Todo[] = [
  { id: 1, text: "Estudar React com TypeScript" },
  { id: 2, text: "Fazer exercícios com useReducer" },
];

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
