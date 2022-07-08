import React from "react";
import {
    useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user1, loading, error1] = useAuthState(auth);
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword
  ] = useCreateUserWithEmailAndPassword(auth);

  

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({displayName: displayName})
    navigate('/home')
  };
  return (
    <div className="w-25 mx-auto mt-5">
      <h2 className="my-4 text-center">Create An Account</h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>

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
            Register
          </Button>
        </div>
      </Form>
        <Link to="/login" style={{textDecoration: "none"}} className="my-3">Already Have An Account?</Link>
    </div>
  );
};

export default Register;
