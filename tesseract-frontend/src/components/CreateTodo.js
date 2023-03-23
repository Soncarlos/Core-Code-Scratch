import React from "react";

export default function CreateTodo({
  title,
  setTitle,
  description,
  setDescription,
  dataToEdit,
  setDataToEdit,
  id,
  setId,
  descript,setShowDescript
}) {
  
  const newtodo = async () => {
    await fetch("http://localhost:3001/v1/to-do", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
  };

  const upTodo = async () => {
    await fetch(`http://localhost:3001/v1/to-do/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
  };
  const clearFields = () => {
    setTitle("");
    setDescription("");
    setId(null);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dataToEdit ? upTodo() : newtodo();
    setDataToEdit(false);
    clearFields();
    setShowDescript(false);
  };
  const handlerTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlerDescription = (e) => {
    setDescription(e.target.value);
  };
   const showInputD=()=>{
    descript? setShowDescript(false): setShowDescript(true);
   }
  return (
    <>
      <div className="container-form">
        <form className="form-input" onSubmit={handlerSubmit}>
          <div className="div-title">
            <input
              type="text"
              name="title"
              value={title}
              placeholder="To-Do"
              onChange={handlerTitle}
            />
          </div>
          <div className="div-button">
              <button className="operation" type="submit">
                SAVE
              </button>
            </div>
          <div className={descript?"div-description":"no-description" }>
            <input
              type="text" 
              name="description"
              value={description}
              placeholder="Description"
              onChange={handlerDescription}
            />
            </div>
          
            <div className="div-button">
            <button className="operation" type="submit" onClick={showInputD}>
              DETAIL
            </button>
          </div>
          
        </form>
      </div>
    </>
  );
}
