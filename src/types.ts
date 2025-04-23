export interface Todo {
  id: number;
  text: string;
}

export type Action =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number };
