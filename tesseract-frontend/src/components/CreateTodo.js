import React, { useState } from "react";

export default function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const newtodo = async () => {
        await fetch('http://localhost:3001/v1/to-do',
            {
                method: "post",
                body: JSON.stringify({ title, description }),
                headers: { 'Content-Type': 'application/json' },
            });
    }
    const clearFields = () => {
        setTitle("");
        setDescription("");
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        newtodo();
        clearFields();
    }
    const handlerTitle = (e) => {
        setTitle(e.target.value);

    }
    const handlerDescription = (e) => {
        setDescription(e.target.value);
    }
    return (
        <div className="container-form">
            <form className="form-input" onSubmit={handlerSubmit}>
                <div className="div-title" >
                    <input type="text" name="title" value={title} onChange={handlerTitle} />
                    <button className="operation">Des</button>
                    <button className="operation" type="submit">Save</button>
                </div>
                <div className="div-description">
                    <input type="text" name="description" value={description} onChange={handlerDescription} />
                </div>
            </form>
        </div>
    )
};