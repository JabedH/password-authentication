import React, { useState } from "react";
import fb from "../../img/fb.svg";
import twitter from "../../img/twitter.svg";
import google from "../../img/google.svg";
import github from "../../img/githiub.svg";
import app from "../firebasse.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./Login.css";
import { Form } from "react-bootstrap";

const auth = getAuth(app);

const Login = () => {
  const auth = getAuth();

  const [check, setCheck] = useState(false);
  const handleCheckBox = (event) => {
    setCheck(event.target.value);
  };
  const handleGoogleSignIn = () => {
    console.log("i got it");
  };

  return (
    <div className="form-details">
      <div className="form-setting">
        <Form className="w-5">
          <h1 className="text-center">Sign {check ? "In" : "Out"} </h1>

          {!check && (
            <Form.Group className="mb-3 p-6 name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
          )}
          <Form.Group className="mb-3 name" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 name" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {!check && (
            <Form.Group className="mb-3 name" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          )}
          <div className="mb-3 d-flex justify-content-between ">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleCheckBox}
                type="checkbox"
                label="Already register?"
              />
            </Form.Group>
            <p type="button" className="password-margin text-danger">
              Forget Password?
            </p>
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" variant="primary" type="submit">
              Sign {check ? "In" : "Out"}
            </button>
          </div>
          <div className="continue">
            <p>continue with</p>
            <div className="continue-img">
              <img
                onClick={handleGoogleSignIn}
                type="button"
                src={google}
                alt=""
              />
              <img type="button" src={fb} alt="" />
              <img type="button" src={twitter} alt="" />
              <img type="button" src={github} alt="" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
