import React from "react";
import "./FilterView.css";
import DefectDetails from "./DefectDetails";

class FilterView extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      priority: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  closeDefect = (closeIndex) => {
    const defects =  JSON.parse(localStorage.getItem("defects"));
    defects.forEach( (element,index) => {
       if(index === closeIndex){
         element.status = 'closed';
       }
    });
    localStorage.setItem("defects", JSON.stringify(defects));
    this.setState({});
    }

  render() {
    return (
      <React.Fragment>
        
          <div id="section-main">
            <h3 id="main-heading">Filter Details</h3>
            <div>
              <p style={{ display: "inline" }}>Priority</p>
              <select
                id="select-priority"
                onChange={this.handleChange}
                name="priority"
                value={this.state.priority}>
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div>
              <p style={{ display: "inline" }}>Category</p>
              <select
                id="select-category"
                onChange={this.handleChange}
                name="category"
                value={this.state.category}>
                <option>All</option>
                <option>UI</option>
                <option>UX</option>
              </select>
            </div>
          </div>
        <DefectDetails filterDetails={this.state} closeDefect = {this.closeDefect} />
      </React.Fragment>
    );
  }
}

export default FilterView;
