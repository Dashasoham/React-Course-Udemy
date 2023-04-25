import React from "react";
import "./ModalWindow.css";
import Card from "../UI/Card";

const ModalWindow = (props) => {
  const { showModal, title, message, onClose } = props;

  if (!showModal) return null;

  return (
    <div>
      <div className="backdrop" />
      <Card className="modal">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="actions">
          {" "}
          <button className="button-54" onClick={onClose}>
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ModalWindow;
