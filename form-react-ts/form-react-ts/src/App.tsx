import React, {useState} from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import ListComponent from "./components/ListComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from "./components/user.model";


function App() {
  const [users,setUsers]=useState<User[]>([]);

 const addUsersHandler=(enteredName:string,enteredEmail:string)=>{
  setUsers(prevUsers=>[...prevUsers,{name:enteredName,email:enteredEmail}])
 }

 
  
  return (
    <div className="App">
      <header className="App-header">
      <FormComponent onAddUsers={addUsersHandler}/>
      {/* // submitForm={onFormSubmit}  */}
      
      
      <ListComponent users={users} />
      </header>
    </div>
  );
  }

export default App;
