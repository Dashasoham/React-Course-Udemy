import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    console.log(event);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredAge);

    // const enteredData = {
    //   name: enteredName,
    //   age: enteredAge,
    // };
  };

  return (
    <Card className="input">
      <form onSubmit={submitFormHandler}>
        <label>Username</label>
        <input
          id="age"
          type="number"
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
        {/* <button className="button-54" role="button">
          Test
        </button> */}
        <Button type="submit">Add User</Button>
      </form>
      {/* <Button className="button-54">Add User</Button> */}
    </Card>
  );
};
export default AddUser;
