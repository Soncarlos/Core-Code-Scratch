import React, { useState, useEffect } from "react";
import "./components/style.css";
import Lista from "./components/List";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(false);
  const[descript, setShowDescript]=useState(false);

  const llamarLista = async () => {
    const respuesta = await fetch("http://localhost:3001/v1/to-dos");
    const respJson = await respuesta.json();
    setData(respJson.todos);
  };

  useEffect(() => {
    llamarLista();
  }, [data]);

  return (
    <div className="title">
      <h1>What's the Plan for Today?</h1>
      <div className="todo-app">
        <CreateTodo
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          id={id}
          setId={setId}
          descript={descript}
          setShowDescript={setShowDescript}
        />
        <Lista
          data={data}
          setId={setId}
          setTitle={setTitle}
          setDescription={setDescription}
          setDataToEdit={setDataToEdit}
          setShowDescript={setShowDescript}
        />
      </div>
    </div>
  );
}

export default App;
