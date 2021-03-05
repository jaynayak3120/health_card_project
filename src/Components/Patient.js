import React, { useState } from 'react';
import { Switch ,Route, Redirect } from "react-router";
import CaseDetails from "./CaseDetails";
import Prescription from "./Prescription";
import Report from './Report';
import { Button, Modal, ModalBody, ModalHeader, Form, Jumbotron, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../Actions/auth.action';
import { PatientCases } from '../Actions/cases.actions';

function Patient() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch= useDispatch();
    const auth = useSelector(state => state.auth)
    const onLogout= () => {
        dispatch(signOut());
    }
    // if(!auth.authenticate){
    //     return <Redirect to='/login' />
    // }
    return (
        <div className="container-fluid">
            <Jumbotron>
                <div className='container-fluid'>
                    <div className='row patientDetail'>
                            <div className='col-4'>
                                <h3>Patient ID: {user.patientID}</h3>
                                <h3>Name: {user.patientName}</h3>
                                <h5>Blood Group: {user.bloodGrp}</h5>
                        </div>
                        <div className='offset-7'><Button color='danger' href='/login' onClick={onLogout}>Log Out</Button></div>
                    </div>
                </div>
            </Jumbotron>
            <div className='container-fluid'>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 row col-12">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ml-3 active">
                                <a class="nav-link" href="/patient/casedetail">Case Detail<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ml-5 active">
                                <a class="nav-link" href="/patient/pres">Prescription</a>
                            </li>
                            <li class="nav-item ml-5 active">
                                <a class="nav-link" href="/patient/report">Report</a>
                            </li>
                            
                        </ul>
                    </div>
                    
                </nav>
                
                <Switch>
                    <Route path="/patient/pres" component={Prescription} />
                    <Route path="/patient/casedetail" component={()=> <CaseDetails PatientCases={PatientCases} />} />
                    <Route path="/patient/report" component={Report} />
                    <Redirect to="/patient/casedetail" />
                </Switch>  
            </div>

        </div>
    )
}

export default Patient;