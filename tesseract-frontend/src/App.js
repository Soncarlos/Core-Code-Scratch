import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [data, setData] = useState([]);
  const llamarLista = async () => {
    const respuesta = await fetch('http://localhost:3001/v1/to-dos');
    const respJson = await respuesta.json();
    setData(respJson.todos);
  }

  useEffect(() => {
    llamarLista();
  }, [data])

  return (
    <div className="todo-app">
      <CreateTodo />
      <List data={data} />
    </div>
  );
}


export default App;
