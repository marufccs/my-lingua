import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../UserContext/UserContext';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);

    // sign in with email and password
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

    // google sign in 
    const handleGoogleSignIn = () => {
googleSignIn()
.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    navigate('/courses')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.error(errorMessage)
    setError(errorMessage)
  });
  }
  // github sign in 
  const handleGithubSignIn = () => {
    githubSignIn()
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate('/courses')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        setError(errorMessage);
        console.error(errorMessage);
        // ...
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
    <div>
    <button onClick={handleGoogleSignIn} type="button" class="btn btn-outline-secondary my-3"> <FaGoogle></FaGoogle> Log In with Google</button> <br/>
    <button onClick={handleGithubSignIn} type="button" class="btn btn-outline-secondary"> <FaGithub></FaGithub> Log In With Github</button>
    </div>
        </div>
    );
};

export default Login;