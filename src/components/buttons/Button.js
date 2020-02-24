import React from "react";
import FunctionManager from "../FUNctions/functionManager";

const Button = () => {
  return (
      <button id="btn" className = "ui yellow button" onClick={FunctionManager.activateFun}>
          Have fun.
      </button>
  )
}
export default Button;