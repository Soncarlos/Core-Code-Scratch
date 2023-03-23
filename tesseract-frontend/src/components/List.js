import React from "react";

const Lista = ({ data, setTitle, setDescription, setDataToEdit, setId, setShowDescript }) => {
  
  var isdone = false;
  const clearFields = () => {
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      {data.map((item) => {
        const delReg = async () => {
          clearFields();
          await fetch(`http://localhost:3001/v1/to-do/${item.id}`, {
            method: "DELETE",
          });
        };

        const complete = async () => {
          isdone = item.is_done ? false : true;

          await fetch(`http://localhost:3001/v1/to-do/comp/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify({ isdone }),
            headers: { "Content-Type": "application/json" },
          });
        };
        const showD=()=>{
          
        }

        const sendData = () => {
          setShowDescript(true);
          setTitle(item.title);
          setDescription(item.description);
          setDataToEdit(true);
          setId(item.id);
          
        };
        return (
          <div
            className={item.is_done ? "list-complete" : "list-container"} key={item.id}>
            <div className="task-container">
              <h2 className="item-title">{item.title}</h2>
              <button className="button-task" onClick={delReg}>
                D
              </button>
              <button className="button-task" onClick={sendData}>
                U
              </button>
              <button className="button-task" onClick={complete}>
                C
              </button>
              <button className="button-task" onClick={showD}>
                S
              </button>
              <div className="clearfix"></div>
              <div>
              <p>{item.description}</p>
              </div>              
            </div>
            <div className="clearfix"></div>
          </div>
        );
      })}
    </div>
  );
};
export default Lista;
