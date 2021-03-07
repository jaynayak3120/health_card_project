import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Modal, ModalHeader, ModalBody, Input, Button, Form, FormGroup, Label } from 'reactstrap';
import { PatientCases } from '../Actions/cases.actions';

function CaseDetails(props) {
   // const [cases, setCases] = useState([]);
    const dispatch = useDispatch();
    const loadCases = async () => {
        dispatch(PatientCases())      
        console.log('data');    
    }
    useEffect(() => {
        loadCases()
    }, [])
    const cases= useSelector(state=> state.cases.cases);
    console.log('cases state', cases);
    const casesRow = cases.map( (data)=> {
        return(
            <tr key={data.caseID}>
                <th scope="row">{data.caseID}</th>
                <td>{data.dateOfEntry}</td>
                <td>{data.caseDetail}</td>
                <td>Dr. {data.docName}</td>
            </tr>
        );
    } );

    return (
        <div>
            
            <Table striped hover>
                <thead className='tableHead'> 
                    <tr>
                        <th>Case_id</th>
                        <th>Date</th>
                        <th>Case Detail</th>
                        <th>Consulted Doctor</th>
                    </tr>
                </thead>
                <tbody>
{/*                     
                    <tr>
                        <th scope="row">348539039</th>
                        <td>2017-07-01T18:30:00.000Z</td>
                        <td>Dengue, High favour and platelets level goes very low(51000)
                        </td>
                        <td>dr. Chandni Nayak</td>
                    </tr>
                    <tr>
                        <th scope="row">348559052</th>
                        <td>2018-03-23T18:30:00.000Z</td>
                        <td>Food poisening, Vomiting and weakness in body.</td>
                        <td>dr. Kinnari Parmar</td>
                    </tr>
                    <tr>
                        <th scope="row">348539040</th>
                        <td>2019-03-21T18:30:00.000Z</td>
                        <td>Chikungunya, Symptoms shown in patient are fever ,joint pain ,headache, muscle pain, joint swelling and rash.</td>
                        <td>dr. Hitesh shah</td>
                    </tr>
                    <tr>
                        <th scope="row">348539041</th>
                        <td>2013-05-10T18:30:00.000Z</td>
                        <td>Covid-19 positive, High favour and weakness in body</td>
                    <td>dr. Jeetu patel</td> 
                    </tr>*/}
                    
                    {casesRow}
                </tbody>
            </Table>
        </div>
    ) 
}

export default CaseDetails;