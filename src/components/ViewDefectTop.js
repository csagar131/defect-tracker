import React from 'react';
import './ViewDefectTop.css';

class ViewDefectTop extends React.Component{
    render(){
        return(
                <div id='section-main-top'>
                    <h1 id='main-heading'>Defect Tracker</h1>
                    <button>Logout</button>
                    <div id="button-section">
                        <button>Add Defect</button>
                        <button>View Defect</button>
                    </div>
                </div>
        )
    }
}

export default ViewDefectTop;