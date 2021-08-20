import React from "react";
import styles from "../../styles/Todo.module.scss";

interface ModalProps {
  toggleModal: () => void | any;
  setInputValue: React.ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
  formSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Modal: React.FC<ModalProps> = ({
  toggleModal,
  setInputValue,
  inputValue,
  formSubmit,
}) => {
  return (
    <div className={styles.modalBody}>
      <div className={styles.overlay} onClick={toggleModal} />
      <form onSubmit={formSubmit} className={styles.modal}>
        <h2>Create a Todo</h2>
        <p>
          You will have it as pending, but you can change it to complete after
          😊
        </p>
        <label htmlFor="title"></label>
        <input
          value={inputValue}
          onChange={setInputValue}
          id="title"
          type="text"
          placeholder="Add Title For Todo"
        />
        <button type="submit">Create {inputValue} Todo</button>
      </form>
    </div>
  );
};

export default Modal;
