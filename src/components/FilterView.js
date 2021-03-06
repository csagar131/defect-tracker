import React from "react";
import "./FilterView.css";
import DefectDetails from "./DefectDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

class FilterView extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      priority: "",
    };
  }

  componentDidMount(){
    this.setState({
      category: "ALL",
      priority: "ALL",
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    return (
      <React.Fragment>
          <div id="section-main" className="shadow-lg p-3 mb-5 bg-body rounded">
            <h3 id="main-heading" className="font-monospace">Filter Defects</h3>
            <div>
              <p style={{ display: "inline",marginRight : "8px" }}>Priority</p>
              <select
                id="select-priority"
                onChange={this.handleChange}
                name="priority"
                value={this.state.priority}
                className="form-select">
                <option>ALL</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div>
              <p style={{ display: "inline",marginRight : "8px" }}>Category</p>
              <select
                id="select-category"
                onChange={this.handleChange}
                name="category"
                value={this.state.category}
                className="form-select form-select-sm">
                <option>ALL</option>
                <option>UI</option>
                <option>UX</option>
              </select>
            </div>
          </div>
        <DefectDetails filterDetails={this.state}/>
      </React.Fragment>
    );
  }
}

export default FilterView;
