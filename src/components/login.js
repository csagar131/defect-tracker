import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './login.css';

class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            username : '',
            password : '',
            message : '',
        }
    }

    changeValue = (e) => {
          let field = e.target.name;
          let value = e.target.value;
          this.setState({
              [field] : value},
          )
          
    }

    login = (e) =>{
        e.preventDefault();
        if(this.state.username === '' || this.state.password === ''){
             this.setState({
                 message : 'Please provid all the details',
             })
             
             alert('Please Provide all the details')
        }
        else{
            alert('login success')
        }
        
    }



    render() {
        return  <React.Fragment>
                    <div className='form-wrapper shadow-lg p-3 mb-5 bg-body rounded'>
                        <h2 style={{textAlign : 'center'}}>Defect Tracker</h2>
                        <h4 style={{textAlign : 'center'}}>Login</h4>
                        <Form className='form-container' style={{border:'3px solid whitesmoke',borderRadius:'5px'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.changeValue} placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={this.changeValue} name="password" value={this.state.password} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.login} type="submit">
                                Login
                            </Button><br/>
                            <a href={{}} style={{textAlign : 'center',marginTop:'10px'}}>Forgot Password?</a>
                        </Form>
                        
                        <h6 style={{textAlign : 'center',margin : '10px 140px'}}>Need an Account? <a href={{}} >Sign Up</a></h6>
                    </div>
                    
            </React.Fragment>
    }
}

export default Login;