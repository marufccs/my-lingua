import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import app from '../firebase/firebase.init';
import { AuthContext } from '../UserContext/UserContext';
import './Register.css'

const auth = getAuth(app);

const Register = () => {
    //useNavigate hook
    const navigate = useNavigate();

    // Getting the context
    const context = useContext(AuthContext);

    const [error, setError] = useState('');
    const [isdisabled, setIsDisabled] = useState(true);

    const {signUp} = context;

    //The registration process
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        signUp(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            Swal.fire(
                'Great!',
                'You have been successfully registered',
                'success'
              )
            navigate('/courses')
            // update profile
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            setError(errorMessage);
            // ..
          });
        form.reset();
    }

     return (
        <div>
               <Form onSubmit={handleRegistration} className='main-form mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter full name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photo' type="text" placeholder="Enter PhotoURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={( ) => setIsDisabled(!isdisabled)} type="checkbox" label="I agree to all of the terms and conditions" />
      </Form.Group>
      <Form.Group>
        <p>Already registered? <Link to = "/login">Log In </Link> </p>
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button variant="info" type="submit"  disabled={isdisabled}>
        Register
      </Button>
    </Form>
        </div>
    );
};

export default Register;