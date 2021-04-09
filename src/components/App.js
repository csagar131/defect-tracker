import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import ViewDefectTop from './components/ViewDefectTop';
//import FilterView from './components/FilterView';
import DefectDetails from './DefectDetails';
import Login from './login';
import Signup from "./Signup";
//import AddDefect from './components/AddDefect';

class App extends React.Component {
  render() {
    return (
      <Container
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={DefectDetails}/>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    );
  }
}

export default App;
