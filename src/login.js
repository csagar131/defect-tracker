import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './App.css';

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
                    <div className='form-wrapper'>
                        <h2 style={{textAlign : 'center'}}>Defect Tracker</h2>
                        <h4 style={{textAlign : 'center'}}>Login</h4>
                        <Form className='form-container'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.changeValue} placeholder="Enter Username" />
                                <Form.Text className="text-muted">
                                    We'll never share your username with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={this.changeValue} name="password" value={this.state.password} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.login} type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
            </React.Fragment>
    }
}

export default Login;