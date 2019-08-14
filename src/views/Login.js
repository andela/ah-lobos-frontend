import React from "react";
import { Form } from "semantic-ui-react";

const Login = () => {
  return (
    <>
      <div className="side-left">
        <div className="main-content">
          <h1 className="brand-header">authorsHaven</h1>
          <p className="txt-info">
            A social platform for the creative at heart
          </p>
        </div>
      </div>
      <div className="side-right">
        <div className="login">
          <Form>
            <input className="input-text" placeholder="username" />
            <input className="input-text" placeholder="password" />
            <br />
            <input className="btn-action" type="submit" />
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
