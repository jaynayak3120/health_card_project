import React from 'react';
import { Switch ,Route, Redirect } from "react-router";
import Login from './Login';
import Patient from './Patient';
import NavHealth from './Nav';
import Doc from './HomeComponent';
import DocPatient from './DocPatient';

function Main() {
  return (
    <div >
        <div className="Main">
          <NavHealth />

          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/patient" component={Patient} />
            <Route path="/doctor" exact component={Doc} />
            <Route path="/doctor/patient" component={DocPatient} />
            <Redirect to="/login" />
          </Switch>
        </div>
    </div>
  );
}

export default Main;