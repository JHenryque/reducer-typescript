import { useReducer } from "react";

interface State {
  id: number;
  nome: string;
  idade: string;
  cargo: string;
  Endereco: string;
}

type CounterAction =
  | { type: "setRemove"; payload: number }
  | { type: "setUser"; payload: State };

const initialState: State[] = [
  {
    id: 1,
    nome: "",
    idade: "",
    cargo: "",
    Endereco: "",
  },
];

function stateReducer(state: State[], action: CounterAction): State[] {
  switch (action.type) {
    case "setUser":
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case "setRemove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Ação desconhecida");
  }
}

// type ActionState = {
//   initialState: State;
//   dispatch: React.Dispatch<CounterAction>;
// }
export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const form = new FormData(e.currentTarget);
  console.log(form);

  const addFive = () => {
    const id = state.id === 0 ? 1 : state.id + 1;
    const name = form.get("name") as string;
    const idade = form.get("idade") as string;
    const cargo = form.get("cargo") as string;
    const Endereco = form.get("Endereco") as string;
    dispatch({
      type: "setUser",
      payload: id,
      name,
      idade,
      cargo,
      Endereco,
    });
  };
  const handleRemove = (id: number) =>
    dispatch({ type: "setRemove", payload: id });

  return (
    <div>
      <form action="">
        <input type="text" name="name" placeholder="Digite seu nome" />
        <input type="text" name="idade" placeholder="Digite sua idade" />
        <input type="text" name="cargo" placeholder="Digite seu cargo" />
        <input type="text" name="Endereco" placeholder="Digite seu Endereco" />
        <button type="submit">Enviar</button>
      </form>

      <h1>Bem vindo Usuario</h1>

      {state.length > 0 && (
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              <p>{item.id}</p>
              <p>{item.nome}</p>
              <p>{item.idade}</p>
              <p>{item.cargo}</p>
              <p>{item.Endereco}</p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={addFive}>Adicione 5</button>
      <button onClick={() => handleRemove(state.id)}>Resetar</button>
    </div>
  );
}
