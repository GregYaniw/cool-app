import React, { useState } from "react";
import _ from "lodash";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";

const SignIn: React.FC = (props: any) => {
  interface SignInState {
    email: string | null;
    password: string | null;
    error: string | null;
  }

  const initState: SignInState = {
    email: null,
    password: null,
    error: null,
  };

  const [getState, setState] = useState<SignInState>(initState);

  const isDisabled: boolean =
    _.isEmpty(getState.email) || _.isEmpty(getState.password);

  const handleChange = (e: any) => {
    setState({
      ...getState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, password } = getState;
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((user: any) => {
        props.history.push(ROUTES.ACCOUNT);
      })
      .catch((error: any) => {
        setState({
          ...getState,
          error: error.message,
        });
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button disabled={isDisabled} type="submit">
          Sign In
        </button>
      </form>
      {getState.error && <p>{getState.error}</p>}
    </div>
  );
};

export default withRouter(withFirebase(SignIn));
