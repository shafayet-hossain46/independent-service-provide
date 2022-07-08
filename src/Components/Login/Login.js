import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useNavigate, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword
      ] = useSignInWithEmailAndPassword(auth);


      const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        navigate('/home')
      };
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
      <Link to="/register" style={{textDecoration: "none"}}>Need An Account?</Link>
    </div>
    );
};

export default Login;