import React, { useEffect, useState } from "react";
import AuthenticationContext from "./context";
import { withFirebase } from "../Firebase";
import { getAuthUser } from "../../Actions/getAuthUser";

const withAuthentication: any = (Component: any) => {
  const WithAuthentication2 = (props: any) => {
    // state will be replaced by redux state soon

    const [getState, setState] = useState(null);

    useEffect(() => {
      props.firebase.auth().onAuthStateChanged((authUser: any) => {
        console.log("response1", props, authUser);
        if (props?.dispatch) {
          console.log("response2", props, authUser);
          props.dispatch(getAuthUser(authUser));
        }

        authUser ? setState(authUser) : setState(null);
      });
    });

    return (
      <AuthenticationContext.Provider value={getState}>
        <Component {...props} />
      </AuthenticationContext.Provider>
    );
  };

  return withFirebase(WithAuthentication2);
};

export default withAuthentication;
