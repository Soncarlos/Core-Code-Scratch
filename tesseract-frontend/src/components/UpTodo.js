import React from "react";

const UpTodo = () => { 
  return (
    <div>
      <div>
        <h1 className="h1-title">UPDATE T-DO</h1>
      </div>
      <div className="div-title-u">
        <input type="text" name="title" value="" />
      </div>
      <div className="div-description-u">
        <input type="text" name="description" value=""/>
      </div>
      <div className="div-button-u">
        <button className="update" type="submit">
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default UpTodo;
