import React from 'react';
import './DefectDetails.css';

class DefectDetails extends React.Component{
    render(){
        return(
           <div id='main-section-defect-details'>
               <h3>Defect  Details</h3>
               <p style={{color : 'red'}}>Search Result : 3</p>
               <div>
                    <table border='1'>
                        <thead>
                           <tr>
                                <th>Defect Category</th>
                                <th>Description</th>
                                <th>priority</th>
                                <th>Status</th>
                                <th>Change Status</th>
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UI</td>
                                <td>submit button comming to extreme left refer the screenshot</td>
                                <td>2</td>
                                <td>open</td>
                                <td>close defect</td>
                            </tr>
                            <tr>
                                <td>UI</td>
                                <td>submit button comming to extreme left refer the screenshot</td>
                                <td>2</td>
                                <td>open</td>
                                <td>close defect</td>
                            </tr>
                            <tr>
                                <td>UI</td>
                                <td>submit button comming to extreme left refer the screenshot</td>
                                <td>2</td>
                                <td>open</td>
                                <td>close defect</td>
                            </tr>
                        </tbody>
                    </table>
               </div>
           </div>
        )
    }
}

export default DefectDetails;