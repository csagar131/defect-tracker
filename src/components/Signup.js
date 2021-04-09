import {React, useRef,  useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap';
import useAuth from '../contexts/AuthContext';
import {Link} from 'react-router-dom';
//import useAuth from '../contexts/AuthContext'
//const useAuth = require('../contexts/AuthContext')


export default function Signup(props) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            setError(
                'password did not match'
            )
            return error;    
        }
        setLoading(true);
        try{
            setError('')
            await signup(emailRef.current.value,passwordRef.current.value)
        } catch (error) {
            return setError("Signup Failed")
        }

        setLoading(false);
    } 
    return (
        <>
            <Card>
               <Card.Body>
                    <h2 className="text-center  mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
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
                        <Button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>
                            Sign Up
                        </Button>
               </Card.Body>
            </Card>
            <div className="W-100 text-center mt-2" style={{color:'white'}}>
                Already have an account? <Link to='/login'> Log In </Link>
            </div>
        </>
    )   
}
