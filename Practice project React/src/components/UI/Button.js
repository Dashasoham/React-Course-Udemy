import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button class="button-54" role="button">
      {" "}
      {props.children}
    </button>
  );
}

export default Button;
