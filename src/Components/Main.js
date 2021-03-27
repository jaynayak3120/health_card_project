import React from 'react';
import { Switch ,Route, Redirect } from "react-router";
import Login from './Login';
import Patient from './Patient';
import NavHealth from './Nav';
import Doc from './Doctor';
import DocPatient from './DocPatient';
import Pharmasist from './Pharmasist';

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
            <Route path="/pharma" exact component={Pharmasist} />
            <Redirect to="/login" />
          </Switch>
        </div>
    </div>
  );
}

export default Main;