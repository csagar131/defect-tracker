import React from 'react';
import './FilterView.css';

class FilterView extends React.Component{
    render(){
        return(
                <div id='section-main'>
                    <h3 id='main-heading'>Filter Details</h3>
                    <div>
                        <p style={{display : 'inline'}}>Priority</p>
                        <select id="select-priority">
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div>
                        <p style={{display : 'inline'}}>Category</p>
                        <select id="select-category">
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
        )
    }
}

export default FilterView;