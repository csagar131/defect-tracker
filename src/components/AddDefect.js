import React from "react";
import "./AddDefect.css";
import DefectDetails from './DefectDetails';
import 'axios';
// import axios from "axios";

class AddDefect extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      description: "",
      priority: "",
      status : "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const defect = {
      category: this.state.category,
      description: this.state.description,
      priority: this.state.priority,
      status : "open",
    };


    if (JSON.parse(localStorage.getItem("defects")) === null) {
      localStorage.setItem("defects", JSON.stringify([]));
    }

    const defects = JSON.parse(localStorage.getItem("defects"));
    defects.push(defect);

    localStorage.setItem("defects", JSON.stringify(defects));

    this.setState({
      category: "",
      description: "",
      priority: "",
      status : "",
    });

  }

  closeDefect = (closeIndex) => {
    const defects =  JSON.parse(localStorage.getItem("defects"));
    defects.forEach( (element,index) => {
       if(index === closeIndex){
         element.status = 'closed';
       }
    });
    localStorage.setItem("defects", JSON.stringify(defects));
    this.setState({
      category: "",
      description: "",
      priority: "",
      status : "",
    });
  }

  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <div id="section-add-defect-main">
          <h4>Add Defect</h4>
          <div>
            <p style={{ display: "inline" }}>Defect Category</p>
            <select
              onChange={this.handleChange}
              name="category"
              value={this.state.category}
            >
              <option>Select</option>
              <option>UI</option>
              <option>UX</option>
            </select>
          </div>
          <div>
            <p style={{ display: "inline" }}>Description</p>
            <textarea
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </div>
          <div>
            <p style={{ display: "inline" }}>Priority</p>
            <input
              type="text"
              name="priority"
              onChange={this.handleChange}
              value={this.state.priority}
            />
          </div>
          <button>Add Defect</button>
        </div>
      </form>
        <DefectDetails closeDefect={this.closeDefect}/>
      </React.Fragment>
    );
  }
}

export default AddDefect;
