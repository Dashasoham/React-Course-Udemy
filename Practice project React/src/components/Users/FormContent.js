import Card from "../UI/Card";

const FormContent = (props) => {
  return (
    <Card className="input">
      <form onSubmit={props.submitFormHandler}>
        <label>Username</label>
        <input
          id="name"
          type="text"
          value={props.enteredName}
          onChange={props.nameChangeHandler}
          ref={props.nameInputRef}
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          value={props.enteredAge}
          onChange={props.ageChangeHandler}
          ref={props.ageInputRef}
        />
        <button className="button-54">Add User</button>{" "}
      </form>
    </Card>
  );
};

export default FormContent;
