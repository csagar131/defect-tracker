import {React, useRef} from 'react'
import {Card, Form, Button} from 'react-bootstrap';
//import {useAuth} from '../contexts/AuthContext';

export default function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    // const {signup} = useAuth();

    // function handleSubmit(e){
    //     e.preventDefault();
    //     signup(emailRef.current.value,passwordRef.current.value)
    // } 

    return (
        <>
            <Card>
               <Card.Body>
                    <h2 className="text-center  mb-4">Sign Up</h2>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
               </Card.Body>
            </Card>
            <div className="W-100 text-center mt-2" style={{color:'white'}}>
                Already have an account? Log In
            </div>
        </>
    )
}