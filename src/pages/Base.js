import React from "react";
import { Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const Base = () => {
  return (
    <>
      <Route path="/login" exact component={Login} />
      <Route path="/registrar" exact component={Register} />
    </>
  );
};

export default Base;
