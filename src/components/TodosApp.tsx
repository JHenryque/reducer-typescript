import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoApp() {
  const context = useContext(TodoContext);
  const [text, setText] = useState("");

  if (!context) {
    return <div>Carregando...</div>;
  }

  const { state, dispatch } = context;

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "ADD", payload: text });
      setText("");
    }
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>📋 Lista de Tarefas</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>
      <ul>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
