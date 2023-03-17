import React from "react";
import Modal from "./Modal";
import { useModal } from "./hooks/useModal";
import UpTodo from "./UpTodo";

const Lista = ({ data }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  var todo = [];
  return (
    <div>
      {data.map((item) => {
        const delReg = async () => {
          await fetch(`http://localhost:3001/v1/to-do/${item.id}`, {
            method: "delete",
          });
        };

        function sendData() {
          openModal();
          todo = data.filter((el) => {
            return el.id === item.id;
          });
          console.log(todo);
        }
        return (
          <section className="list-container" key={item.id}>
            <div className="task-container">
              <h3>{item.title}</h3>
              <button className="button-task" onClick={delReg}>
                D
              </button>
              <button className="button-task" onClick={sendData}>
                U
              </button>
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <UpTodo todo={todo} />
              </Modal>
              <button className="button-task" onClick={delReg}>
                C
              </button>
              <button className="button-task" onClick={delReg}>
                S
              </button>
              <div className="clearfix"></div>
              <p>{item.description}</p>
            </div>
            <div className="clearfix"></div>
          </section>
        );
      })}
    </div>
  );
};
export default Lista;
