import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
//import {AuthProvider} from '../contexts/AuthContext'
//import ViewDefectTop from './components/ViewDefectTop';
//import FilterView from './components/FilterView';
// import DefectDetails from './components/DefectDetails';
//import Login from './login';
import Signup from './Signup';
//import AddDefect from './components/AddDefect';

class App extends React.Component{
  render(){
    return (
       
          <Container style={{minHeight: '100vh'}}  className="d-flex justify-content-center align-items-center">
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Signup/>
            </div>
          </Container>
       
    )
  }
}

export default App;
