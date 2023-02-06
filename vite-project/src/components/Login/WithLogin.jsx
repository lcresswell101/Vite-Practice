import {Component} from "react";
import Login from "./Login.jsx";

export const WithLogin = Component => ({ ...props }) => (
  <Login>
    <Component {...props} />
  </Login>
);