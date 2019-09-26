import React from "react";
import { Route, Redirect } from "react-router-dom";

export const Dashboard = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={props => {
          if (sessionStorage.getItem("token") !== null) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    </>
  );
};
