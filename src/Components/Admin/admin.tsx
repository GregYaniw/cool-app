import React, { useEffect } from "react";
import { withFirebase } from "../Firebase";
import { AuthContext, withAuthentication } from "../Sessions";

const Admin: React.FC = (props: any) => {
  console.log("admin", props);

  // useEffect(() => {
  //   const usersRef = props.firebase.database().ref("users");
  //   usersRef.on("value", (snapshot: any) => {
  //     for (let user in snapshot.val()) {
  //       if (
  //         authUser?.authUser.uid === snapshot.val()[user].id &&
  //         snapshot.val()[user].isAdmin
  //       ) {
  //         setState(true);
  //         return false;
  //       } else {
  //         setState(false);
  //         return false;
  //       }
  //     }
  //   });
  // });

  return <div>Admin</div>;
};

export default withFirebase(withAuthentication(Admin));
