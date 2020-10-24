import React from "react";

const FirebaseContext = React.createContext<any>(null);

export const withFirebase = (Component: any) => (props: any) => {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => {
        return <Component {...props} firebase={firebase} />;
      }}
    </FirebaseContext.Consumer>
  );
};

export default FirebaseContext;
