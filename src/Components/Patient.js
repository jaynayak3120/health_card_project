import React, { useEffect } from 'react';
import { Switch ,Route, Redirect } from "react-router";
import { Jumbotron } from 'reactstrap';
import CaseDetails from "./CaseDetails";
import Prescription from "./Prescription";
import imgg from '../Jay_nayak.jpg';
import Report from './Report';
 import { PatientCases } from '../Actions/cases.actions'
 import { useDispatch, useSelector } from 'react-redux';

function Patient() {

    const dispatch= useDispatch();
    useEffect(async () => {
        dispatch(PatientCases());
    });
    const identity= useSelector(state => state.cases.cases);
    console.log('patientIdentity'+identity)
    return (
        <div>
            <Jumbotron>
                <div className='container-fluid'>
                    <div className='row patientDetail'>
                            <div className='col-4'><h3>Patient ID: {identity.patientID}</h3>
                            <h3>Name: </h3>
                            <h5>Blood Group: O+</h5>
                            <a href="D:\Project 1\Diagrams.pdf" target="_blank">click here!</a>
                        </div>
                        <div className='offset-5'><img className='patientimage' src={imgg} alt='Jay_nayak' /></div>
                    </div>
                </div>
            </Jumbotron>
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 row col-12">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ml-3 active">
                                <a class="nav-link" href="/patient/casedetail">Case Detail<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ml-5">
                                <a class="nav-link" href="/patient/pres">Prescription</a>
                            </li>
                            <li class="nav-item ml-5">
                                <a class="nav-link" href="/patient/report">Report</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <ul></ul>
                </div>    
                <Switch>
                    <Route path="/patient/pres" component={Prescription} />
                    <Route path="/patient/casedetail" component={()=> <CaseDetails />} />
                    <Route path="/patient/report" component={Report} />
                    <Redirect to="/patient/casedetail" />
                </Switch>  
            </div>

        </div>
    )
}

export default Patient;