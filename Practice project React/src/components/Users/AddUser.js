import React, { useState } from "react";
import UserList from "./UserList";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredAge);

    const userData = {
      name: enteredName,
      age: enteredAge,
    };

    // props.onSaveUserData(userData);
    setFormSubmitted(true);
  };

  let formContent = (
    <form onSubmit={submitFormHandler}>
      <label>Username</label>
      <input
        id="name"
        type="text"
        value={enteredName}
        onChange={nameChangeHandler}
      />
      <label>Age (Years)</label>
      <input
        id="age"
        type="number"
        value={enteredAge}
        onChange={ageChangeHandler}
      />

      <Button type="submit">Add User</Button>
    </form>
  );
  let content = formContent;
  if (formSubmitted) {
    content = (
      <div>
        {formContent}
        <UserList />
      </div>
    );
  }

  return (
    <div>
      <Card className="input">{content}</Card>
    </div>
  );
};
export default AddUser;
