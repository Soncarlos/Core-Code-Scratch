import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={isOpen ? "modal is-Open" : "modal"}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};
export default Modal;
