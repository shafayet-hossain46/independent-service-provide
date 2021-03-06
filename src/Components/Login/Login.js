import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useNavigate, Link, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'; 

    const [
        signInWithEmailAndPassword
      ] = useSignInWithEmailAndPassword(auth);


      const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        // navigate(from, {replace: true})
      };


    if(user){
        navigate(from, {replace: true})
    }


    //   Google Log In
    const googleLog = () => {
        signInWithGoogle()
    }
    return (
        <div className="w-25 mx-auto mt-5">
      <h2 className="my-4 text-center">Login Into Your Account</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="password"
            placeholder="Your Password"
            required
          />
        </Form.Group>
        <div className="d-grid mb-2">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
        <div className="d-grid mb-2">
          <Button onClick={googleLog} variant="primary" type="submit">
            Google Sign In
          </Button>
        </div>
      <Link to="/register" style={{textDecoration: "none"}}>Need An Account?</Link>
    </div>
    );
};

export default Login;