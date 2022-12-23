import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </form>
  );
};

export default Input;
