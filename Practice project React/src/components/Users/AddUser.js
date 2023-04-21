import React, { useState } from "react";
import UserList from "./UserList";
import FormContent from "./FormContent";
import ModalWindow from "./ModalWindow";
import "./AddUser.css";

const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredAge);

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowModal(true);
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    setUsers((prevUsers) => [...prevUsers, userData]);

    setFormSubmitted(true);
    setEnteredName("");
    setEnteredAge("");
  };

  const closeShowModal = () => {
    console.log("button clicked");
    setShowModal(false);
  };

  let content = (
    <FormContent
      enteredName={enteredName}
      enteredAge={enteredAge}
      nameChangeHandler={nameChangeHandler}
      ageChangeHandler={ageChangeHandler}
      submitFormHandler={submitFormHandler}
    />
  );

  if (formSubmitted && users.length > 0) {
    content = (
      <div>
        {content}
        <UserList users={users} />
      </div>
    );
  }

  return (
    <div>
      {showModal && (
        <div>
          <ModalWindow
            title="Invalid Input"
            message="Please enter a valid name and age (non-empty values)."
            onClose={closeShowModal}
          />
        </div>
      )}
      {content}
    </div>
  );
};
export default AddUser;
