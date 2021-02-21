import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import {Card, CardBody, Form, FormGroup, Label, Input} from 'reactstrap';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
    },
  });

function Login() {
    return(
        <div className='login'>
            <ThemeProvider theme={theme}>
            
            <div className='subLogin row'>
              <div className='logo col-12 col-md-5 offset-1'>
                <h1 className='text-primary'>HEALTH CARD</h1>
                <h3>Health Card keeps your medical info. secure and helps to provide you the best possible treatment.</h3>
              </div>
              <div className='col-10 col-md-4 mr-3'>
                <Card className='card'>
                  <CardBody className='card-body'>
                    <Form>
                    <FormGroup>
                      <Input type="select" name="userType" id="userType">
                        <option default>Select User Type</option>
                        <option>Patient</option>
                        <option>Doctor</option>
                        <option>Pharacist</option>
                        <option>Laboratory</option>
                      </Input>
                    </FormGroup>
                      <FormGroup>
                        <Label for='userid'><strong>UserId</strong></Label>
                        <Input type='text' name='userId' id='userid' placeholder='User Id' />
                      </FormGroup>
                      <FormGroup>
                        <Label for='password'><strong>Password</strong></Label>
                        <Input type='password' id='password' name='password' placeholder='Password' />
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