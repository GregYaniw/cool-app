import React from "react";
import { withFirebase } from "../Firebase";

const LogOut: React.FC = (props: any) => {
  return <button onClick={() => props.firebase.doSignOut()}>Log Out</button>;
};

export default withFirebase(LogOut);
