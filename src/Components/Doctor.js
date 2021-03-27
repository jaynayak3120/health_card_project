import React , { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {Button, FormGroup, Label, Input, Form} from 'reactstrap';
import { DoctorCases, FetchPatientCases } from '../Actions/cases.actions';

function DocHome() {
    const [userID, setUserID] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))
    const patientSubmit = (e) => {
        e.preventDefault();
        dispatch(FetchPatientCases(userID))
    }
    useEffect(() => {
        dispatch(DoctorCases())
    })

    const cases  = useSelector(state => state.cases.cases)
    console.log('doctor cases',cases);

    if(cases!==null && userID!==null) {
        return <Redirect to='/doctor/patient/cases' />
    }
    return(
        <div className="container">
            <div className="row mt-2">
                <h2 className='col-4'>Home</h2>
                
                <div className='offset-6 col-2 mt-2'><strong><h4>dr. {user.docName}</h4></strong></div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-4 mb-3">
                    <Form className="mt-2" onSubmit={patientSubmit}>
                        <FormGroup>
                            <Label htmlFor="userid">Enter Patient Id</Label>
                            <Input type="text" id="userid" name="userid" value={userID} placeholder="Patient Id" 
                                onChange={(e) => setUserID(e.target.value)} />
                        </FormGroup>
                        <Button type="submit" className="btn mt-2"  color="primary" value="submit">Enter</Button>
                    </Form>
                </div>
                
                <div className="col-md border mb-3">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <h3 className="ml-2">History</h3>
                        </div>
                        <div className="col-md">
                        <Form className="mt-2">
                            <div className="row">
                                <div className="col-md-8 mt-2">
                                    <FormGroup>
                                        <Input type="text" id="search" name="search" placeholder="Search" 
                                            />
                                    </FormGroup>
                                </div>
                                <div className="col-md-4">
                                    <Button color="primary" type="submit" className="btn mt-2 btn-primary" value="submit"><span className="fa fa-search"></span>Search</Button>
                                </div>
                            </div>
                        </Form> 
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className='row mt-3'>
                <Button color='danger' className='offset-11' href='/login'>Sign Out</Button>
            </div>
        </div>
    );
}

export default DocHome;