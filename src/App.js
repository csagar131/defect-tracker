
import './App.css';
import React from 'react';
import ViewDefectTop from './components/ViewDefectTop';
// import FilterView from './components/FilterView';
// import DefectDetails from './components/DefectDetails';
import AddDefect from './components/AddDefect';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>    
          <ViewDefectTop/>
          <AddDefect/>
      </React.Fragment>
    )
  }
}

export default App;
