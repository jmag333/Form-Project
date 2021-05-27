import { useState } from "react";
import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  // const [firstName, setFirstName] = useState("");
  // const [firstNameError, setFirstNameError] = useState(true);
  // const [firstNameTouched, setFirstNameTouched] = useState(false);
  // const [lastName, setLastName] = useState("");
  // const [lastNameError, setLastNameError] = useState(true);
  // const [lastNameTouched, setLastNameTouched] = useState(false);
  // const [email, setEmail] = useState("");

  // const firstNameChangehandler = (event) => {
  //   setFirstName(event.target.value);
  //   if (event.target.value.trim() !== "") {
  //     setFirstNameError(false);
  //     return;
  //   }
  //   setFirstNameError(true);
  // };
  // const firstNameBlurHandler = () => {
  //   setFirstNameTouched(true);
  // };
  // let firstNameInvalid = firstNameError && firstNameTouched;

  // const lastNameChangehandler = (event) => {
  //   setLastName(event.target.value);
  //   if (event.target.value.trim() !== "") {
  //     setLastNameError(false);
  //     return;
  //   }
  //   setLastNameError(true);
  // };
  // const lastNameBlurHandler = () => {
  //   setLastNameTouched(true);
  // };
  // let lastNameInvalid = lastNameError && lastNameTouched;

  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />{" "}
          {firstNameHasError && (
            <p className="error-text">Please enter a first name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />{" "}
          {lastNameHasError && (
            <p className="error-text">Please enter a last name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
