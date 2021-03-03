import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Modal, ModalHeader, ModalBody, Input, Button, Form, FormGroup, Label } from 'reactstrap';
import { PatientCases } from '../Actions/cases.actions';

function CaseDetails() {
   // const [cases, setCases] = useState([]);
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal)
    const dispatch = useDispatch();
    const loadCases = async () => {
        await dispatch(PatientCases()); 
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
                <td>{data.docID}</td>
            </tr>
        );
    } );

    return (
        <div>
            <Modal isOpen={modal} toggle= {openModal}>
                <ModalHeader toggle= {openModal}>
                    dr. abc def
                </ModalHeader>
                <ModalBody>
                    CaseDetail: Dengue, High favour and platelets level goes very low(51000)
                    Prescription: Water is a precious resource that nature has bestowed on Planet Earth. Water is vital for all life forms as also for all vegetation. Terrestrial life forms need water to drink. If they do not get water to drink they will perish. All aquatic creatures need water bodies to live in. Water bodies, whether they are rivers or seas or oceans, are their habitat. Vegetation needs water to survive. All vegetation will wither and die in the absence of water. Water is therefore an important resource that must be saved. We must not waste water. We must use water judiciously. way to save water Check your toilet for leaks.Stop using your toilet as an ashtray or wastebasket.Put a plastic bottle in your toilet tank.Take shorter showers.Install water-saving shower heads or flow restrictors.
                </ModalBody>
            </Modal>
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
                    {casesRow}

                    <tr>
                        <th scope="row">348539039</th>
                        <td>07/01/2017</td>
                        <td>Dengue, High favour and platelets level goes very low(51000)
                            <Button onClick={openModal} color= "danger">Detail</Button>
                        </td>
                        <td>dr. Chandni Nayak</td>
                    </tr>
                    <tr>
                        <th scope="row">348559052</th>
                        <td>21/03/2018</td>
                        <td>Food poisening, Vomiting and weakness in body.</td>
                        <td>dr. Kinnari Parmar</td>
                    </tr>
                    <tr>
                        <th scope="row">348539040</th>
                        <td>21/03/2019</td>
                        <td>Chikungunya, Symptoms shown in patient are fever ,joint pain ,headache, muscle pain, joint swelling and rash.</td>
                        <td>dr. Hitesh shah</td>
                    </tr>
                    <tr>
                        <th scope="row">348539041</th>
                        <td>01/06/2020</td>
                        <td>Covid-19 positive, High favour and weakness in body</td>
                        <td>dr. Jeetu patel</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ) 
}

export default CaseDetails;