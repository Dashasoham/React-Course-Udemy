import React, { useState, useRef } from "react";
import UserList from "./UserList";
import FormContent from "./FormContent";
import ModalWindow from "./ModalWindow";
import "./AddUser.css";

const AddUser = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // const nameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (!enteredUserName.trim().length || !enteredUserAge.trim().length)
      return toggleShowModal();

    const userData = {
      name: enteredUserName,
      age: enteredUserAge,
      id: Math.random().toString(),
    };

    setUsers((prevUsers) => [...prevUsers, userData]);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // setEnteredName("");
    // setEnteredAge("");
  };

  const toggleShowModal = () => {
    // console.log('button clicked');
    setShowModal((prev) => !prev);
  };

  let content = (
    <FormContent
      // enteredName={enteredName}
      // enteredAge={enteredAge}
      // nameChangeHandler={nameChangeHandler}
      // ageChangeHandler={ageChangeHandler}
      submitFormHandler={submitFormHandler}
      nameInputRef={nameInputRef}
      ageInputRef={ageInputRef}
    />
  );

  if (users.length) {
    content = (
      <div>
        {content}
        <UserList users={users} />
      </div>
    );
  }

  return (
    <div>
      <ModalWindow
        title="Invalid Input"
        message="Please enter a valid name and age (non-empty values)."
        showModal={showModal}
        onClose={toggleShowModal}
      />

      {content}
    </div>
  );
};
export default AddUser;
