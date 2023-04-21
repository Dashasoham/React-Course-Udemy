import React from "react";
import "./UserList.css";

const UserList = (props) => {
  return (
    <div>
      <ul className="users">
        {props.users.map((user) => (
          <li key={user.id} className="users">
            <label>{user.name}</label>
            <label>{user.age}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
