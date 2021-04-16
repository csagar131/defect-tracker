import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilterView from './FilterView';
import DefectDetails from './DefectDetails';
import Login from './login';
import Signup from "./Signup";
import AddDefect from './AddDefect';
import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div
        style={{ minHeight: "100vh",maxHeight : "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "100vw" }}>
          <Router>
            <AuthProvider>
              <Navbar/>
              <Container>
                <Switch>
                  <div style={{paddingTop:'80px'}}> 
                  <Route path="/viewDetails" component={DefectDetails}/>
                  <Route path="/filterView" component={FilterView}/>
                  <Route exact path="/" component={Signup} />
                  <Route path="/login" component={Login}/>
                  <Route path="/addDefect" component={AddDefect}/>
                  </div> 
                </Switch>
              </Container>
            </AuthProvider>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
