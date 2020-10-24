import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";
import LogOut from "../LogOut";
import { AuthContext, withAuthentication } from "../Sessions";
import { withFirebase } from "../Firebase";

const Navigation: React.FC = (props: any) => {
  type isAdmin = boolean | null;
  interface User {
    id: string;
    email: string;
    isAdmin: string;
  }
  const [getState, setState] = useState<isAdmin>(null);
  const AuthNav = (authUser: any) => {
    useEffect(() => {
      const usersRef = props.firebase.database().ref("users");
      usersRef.on("value", (snapshot: any) => {
        for (let user in snapshot.val()) {
          if (
            authUser?.authUser.uid === snapshot.val()[user].id &&
            snapshot.val()[user].isAdmin
          ) {
            setState(true);
            return false;
          } else {
            setState(false);
            return false;
          }
        }
      });
    });

    return (
      <div>
        <ul>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          {getState ? (
            <li>
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
          ) : null}

          <li>
            <LogOut />
          </li>
        </ul>
      </div>
    );
  };

  const UnAuthNav = () => (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>SignUp</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>SignIn</Link>
        </li>
      </ul>
    </div>
  );
  return (
    <AuthContext.Consumer>
      {(authUser) =>
        authUser ? <AuthNav authUser={authUser} /> : <UnAuthNav />
      }
    </AuthContext.Consumer>
  );
};

export default withFirebase(withAuthentication(Navigation));
