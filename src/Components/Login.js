import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import {Card, CardBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Signin } from '../Actions/auth.action';
import { Redirect } from 'react-router';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
    }, 
  });

function Login() {

    const [type, setType] = useState('');
    const [userID, setUserID] = useState(null);
    const [userPass, setUserPass] = useState('');

    const dispatch = useDispatch();
    const userLogin = (e) => {
      e.preventDefault();
      const user = {
          userData : {
              userID: userID,
              userPass: userPass.toString()
          },
          userType: type
      }
      console.log(user);
      dispatch(Signin(user));
    }

    const auth = useSelector(state => state.auth)
    if(auth.authenticate && !auth.patientID) {
      return <Redirect to='/patient/cases' />
    } 

    return(
        <div className='container-fluid'>
            <ThemeProvider theme={theme}>
            
            <div className='subLogin row'>
              <div className='logo col-12 col-md-5 offset-1'>
                <h1 className='text-primary'>HEALTH CARD</h1>
                <h3>Health Card keeps your medical info. secure and helps to provide you the best possible treatment.</h3>
              </div>
              <div className='col-10 col-md-4 mr-3'>
                <Card className='card'>
                  <CardBody className='card-body'>
                    <Form onSubmit={userLogin}>
                      <FormGroup>
                        <Input type="select" name="userType" id="userType" onChange={(e) => setType(e.target.value.toLowerCase())}>
                          <option default value=''>Select User Type</option>
                          <option value='user'>Patient</option>
                          <option value='doctor'>Doctor</option>
                          <option value='pharmacist'>Pharacist</option>
                          <option value='laboratory'>Laboratory</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for='userid'><strong>UserId</strong></Label>
                        <Input type='text' name='userId' id='userid' placeholder='User Id' value={userID} onChange={(e) => setUserID(e.target.value)} />
                      </FormGroup>
                      <FormGroup>
                        <Label for='password'><strong>Password</strong></Label>
                        <Input type='password' id='password' name='password' placeholder='Password' value={userPass} onChange={(e) => setUserPass(e.target.value)} />
                      </FormGroup>
                      <Button type='submit' className='loginButton' variant="contained" fullWidth color='primary'>
                        <strong>Log in</strong>
                      </Button>
                    </Form>
                    
                  </CardBody>
                </Card>
              </div>
            </div>
            </ThemeProvider>
        </div>
    )
}

export default Login;