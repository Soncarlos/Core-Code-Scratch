import React, { useState, useEffect } from "react";
import "./App.css";
import Lista from "./components/List"
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
    <div className="title">
      <h1>What's the Plan for Today?</h1>
      <div className="todo-app">
        <CreateTodo />
        <Lista data={data} />
      </div>
    </div>
  );
}


export default App;
