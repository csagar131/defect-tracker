import React from 'react';
import './DefectDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DefectDetails extends React.Component{

    closeDefect = (e) =>{
        const tableRowChildren = e.target.parentElement.parentElement.children;
        const localStorageData = JSON.parse(localStorage.getItem('defects'))   
        let requiredIndex = '';

        localStorageData.forEach((element,index) => {
            console.log(element)
            if(element.category === tableRowChildren[0].innerText && element.description === tableRowChildren[1].innerText){
                requiredIndex = index;
            }
        });
        this.props.closeDefect(requiredIndex);  //caliing parent component method using this.props
    }


    render(){
        let defects = '';
        if(this.props.filterDetails === null || this.props.filterDetails === undefined){
            defects = JSON.parse(localStorage.getItem('defects'))  
        } 
        else{
            defects = JSON.parse(localStorage.getItem('defects')).filter(
                defectData => {
                    if(this.props.filterDetails.category === 'All' && this.props.filterDetails.priority === 'All'){
                        return true;
                    }
                    else{
                        let result = false;
                        if(defectData.category === this.props.filterDetails.category && defectData.priority === this.props.filterDetails.priority ){
                            result = true;
                        }
                        else if(defectData.category === this.props.filterDetails.category){
                            console.log(defectData)
                            result = true;
                        }
                        else if(defectData.priority === this.props.filterDetails.priority){
                            console.log(defectData)
                            result =  true;
                        }
                        return result;
                    }
                    
                }
            )
            // console.log(defects)
        }
        return(
           <div id='main-section-defect-details' className="shadow-lg p-3 mb-5 bg-body rounded">
               <h3 style={{color : 'white'}}>Defect  Details</h3>
               <p style={{color : 'red'}}>Search Result : {defects.length}</p>
               <div>
                    <table border='1'>
                        <thead>
                           <tr key={Math.random()}>
                                <th>Defect Category</th>
                                <th>Description</th>
                                <th>priority</th>
                                <th>Status</th>
                                <th>Change Status</th>
                           </tr>
                        </thead>
                        <tbody>
                            {defects.map(defect => {
                                return (
                                    <tr key={Math.random()}>
                                        <td>{defect.category}</td>
                                        <td>{defect.description}</td>
                                        <td>{defect.priority}</td>
                                        <td>{defect.status}</td>
                                        <td><button className="btn btn-outline-warning text-dark" onClick={this.closeDefect}>close defect</button></td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
               </div>
           </div>
        )
    }
}

export default DefectDetails;