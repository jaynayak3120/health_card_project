import react, { useEffect, useState } from 'react';
import { Switch ,Route, Redirect } from "react-router";
import CaseDetails from "./CaseDetails";
import Prescription from "./Prescription";
import Report from './Report';
import { Button, Modal, ModalBody, ModalHeader, Form, Jumbotron, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorPostCase, FetchPatientCases } from '../Actions/cases.actions';
import DocCasesDet from './DocCasesDet';

function DocPatient() {
    
    const [modal, setModal] = useState(false);
    const [caseDetail, setCaseDetail] = useState('')
    const [prescDetail, setPrescDetails] = useState('')

    const openModal = () => setModal(!modal)
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch= useDispatch();
    const auth = useSelector(state => state.auth)
    const patient = {
        patientID: "12349",
        patientName: "Dhruv",
        dateOfBirth: "1997-05-10T18:30:00.000Z",
        bloodGrp: "AB+ve"
    }///localStorage.getItem('currentPatient')

    const submitCases = (e) => {
        e.preventDefault();
        const cases = {
            "caseDetail": caseDetail,
            "prescDetail": prescDetail,
            "userId": patient.patientID,
            "dateOfEntry": new Date()
        }
        dispatch(DoctorPostCase(cases))
        setCaseDetail('')
        setPrescDetails('')
    }

    useEffect(() => {
        dispatch(FetchPatientCases(12349))
    })

    return (
    <div className="container-fluid">
        <Jumbotron>
            <div className='container-fluid'>
                <div className='row patientDetail'>
                        <div className='col-4'>
                            <h3>Patient ID: </h3>
                            <h3>Name: </h3>
                            <h5>Blood Group: </h5>
                    </div>
                    <div className='offset-7'><Button color='success' href="/doctor">Home</Button></div>
                </div>
            </div>
        </Jumbotron>
            <Modal isOpen={modal} toggle= {openModal} className="">
                <ModalHeader toggle= {openModal}>
                    Add New Case
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitCases}>
                        <FormGroup className='mb-4'>
                            <Label for="caseDetail" className=''><strong>Case Detail:</strong></Label>
                            <Input type="textarea" name="text" className='' id="caseDetail" value={caseDetail} onChange={(e) => setCaseDetail(e.target.value)} />
                        </FormGroup>
                        <FormGroup className=''>
                            <Label for="prescription" className=''><strong>Prescription: </strong></Label>
                            <Input type="textarea" name="text" className='' id="prescription" value={prescDetail} onChange={(e) => setPrescDetails(e.target.value)} />
                        </FormGroup>
                        <FormGroup className='row'>
                            <Button className='offset-2 col-8 mt-2' color="warning"><strong>Add</strong></Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 row col-12">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ml-3 active">
                            <a class="nav-link" href="/doctor/patient/casedetail">Case Detail<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ml-5 active">
                            <a class="nav-link" href="/doctor/patient/pres">Prescription</a>
                        </li>
                        <li class="nav-item ml-5 active">
                            <a class="nav-link" href="/doctor/patient/report">Report</a>
                        </li>
                        
                    </ul>
                </div>
                <Button type='submit' value='submit' onClick={openModal} color="primary">Add new case</Button>
            </nav>

            <Switch>
                    <Route path="/doctor/patient/pres" component={Prescription} />
                    <Route path="/doctor/patient/casedetail" component={DocCasesDet} />
                    <Route path="/doctor/patient/report" component={Report} />
                    <Redirect to="/doctor/patient/casedetail" />    
            </Switch>  
        </div>
    </div>
    )
}

export default DocPatient;