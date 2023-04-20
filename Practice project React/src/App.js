import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <AddUser />
      {/* <UserList /> */}
    </div>
  );
}

export default App;
