import React, {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './login.css';
import {Link, useHistory} from 'react-router-dom';
import useAuth from '../contexts/AuthContext';


export default function Login(){
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const history = useHistory()
    
    async function handleSubmit(e){
        e.preventDefault();
        if(emailRef.current.value === '' || passwordRef.current.value === ''){
             return setError('Please provid all the details')
        }
        else{
            setLoading(false)
            try{
                setError('')
                await login(emailRef.current.value,passwordRef.current.value)
                history.push("/filterView")
            } catch (error) {
                return setError('Login Failed')
            }
            setLoading(false)
        }
    }

        return  <React.Fragment>
                    <div className='form-wrapper shadow-lg p-3 mb-5 bg-body rounded'>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <h2 style={{textAlign : 'center'}}>Login</h2>
                        <Form className='form-container' style={{border:'3px solid whitesmoke',borderRadius:'5px'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email"  ref={emailRef} placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  name="password" ref={passwordRef}  placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" disabled={loading} onClick={handleSubmit} type="submit">
                                Login
                            </Button><br/>
                            <Link style={{textAlign : 'center',marginTop:'10px'}}>Forgot Password?</Link>
                        </Form>
                        <h6 style={{textAlign : 'center',margin : '10px 100px'}}>Need an Account? <Link to="/">Sign Up</Link></h6>
                    </div>
                    
            </React.Fragment>
}
