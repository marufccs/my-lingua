import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../UserContext/UserContext';


const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const {signIn} = useContext(AuthContext);

    const handleSignIn = event =>  {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            Swal.fire(
                'Great!',
                'You have been logged in successfully',
                'success'
              )
            navigate('/courses')
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            setError(errorMessage);
          });
    }

    return (
        <div>
              <Form onSubmit={handleSignIn} className='main-form mx-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group>
        <p>Haven't registered yet? <Link to = "/register"> Register here </Link> </p>
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <Button variant="info" type="submit">
        Log In
      </Button>
    </Form> 
        </div>
    );
};

export default Login;