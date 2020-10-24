import React, { useState } from "react";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";
import _ from "lodash";

const SignUp: React.FC = (props: any) => {
  interface SignUpState {
    email: string | null;
    passwordOne: string | null;
    passwordTwo: string | null;
    error: string | null;
  }

  const [getState, setState] = useState<SignUpState>({
    email: null,
    passwordOne: null,
    passwordTwo: null,
    error: null,
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setState({
      ...getState,
      [e.target.name]: e.target.value,
    });
  };

  const submitSignUp = (e: any) => {
    e.preventDefault();
    const { email, passwordOne } = getState;
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: any) => {
        setState({
          email: null,
          passwordOne: null,
          passwordTwo: null,
          error: null,
        });
        props.firebase.database().ref("users").push({
          id: authUser.user.uid,
          email: authUser.user.email,
          isAdmin: false,
        });
        props.history.push(ROUTES.ACCOUNT);
      })
      .catch((error: any) => {
        setState({
          ...getState,
          error: error.message,
        });
      });
  };

  const { email, passwordOne, passwordTwo } = getState;
  const isDisabled =
    _.isEmpty(email) ||
    _.isEmpty(passwordOne) ||
    _.isEmpty(passwordTwo) ||
    !_.isEqual(passwordOne, passwordTwo);

  return (
    <div>
      <h1>Please Sign Up</h1>

      <form onSubmit={submitSignUp}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="passwordOne"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="passwordTwo"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button disabled={isDisabled} type="submit">
          Sign Up
        </button>
      </form>
      {getState.error && <p>{getState.error}</p>}
    </div>
  );
};

export default withRouter(withFirebase(SignUp));
