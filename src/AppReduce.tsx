import { useReducer, useState } from "react";
// types.ts
interface Todo {
  id: number;
  text: string;
  title: string;
}

// interface TodosState {
//   todos: Todo | null;
// }

type Action =
  | { type: "ADD"; payload: Todo | any }
  | { type: "REMOVE"; payload: number };

const initialState: Todo[] = [
  { id: 1, text: "Estudar React", title: "React com reducer" },
  {
    id: 2,
    text: "Ler documentação do TypeScript",
    title: "TypeScript com reducer",
  },
];

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          title: action.payload.title,
        },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default function AppReduce() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [credentials, setCredentials] = useState({});
  //const [text, setText] = useState("");
  //const [title, setTitle] = useState("");

  const handleAdd = () => {
    const newTodo = credentials;
    if (credentials.text && credentials.title) {
      dispatch({ type: "ADD", payload: newTodo });
      setCredentials({ email: "", password: "" });
    }
  };

  console.log(credentials);
  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  function handlerChange(e: any) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          name="text"
          onChange={(e) => handlerChange(e)}
          className="border p-2 flex-grow rounded"
        />
        <input
          type="text"
          name="title"
          onChange={(e) => handlerChange(e)}
          className="border p-2 flex-grow rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            {todo.text}
            {" - "}
            {todo.title}
            <button
              onClick={() => handleRemove(todo.id)}
              className="text-red-500 hover:underline"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
