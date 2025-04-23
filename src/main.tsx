//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from './App.tsx'
//import AppReduce from "./AppReduce.tsx";
import TodoProvider from "./context/TodoContext.tsx";
import TodoApp from "./components/TodosApp.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <AppReduce />
  // </StrictMode>
  <TodoProvider>
    <TodoApp />
  </TodoProvider>
);
