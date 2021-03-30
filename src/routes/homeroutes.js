import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home';
import TMG from '../components/tmg';
import Madinaty from '../components/MadinatySportingClub';
import Football from '../components/Football';


function Routes() {


  return (
    <Router>


      <Switch>



        <Route path="/">
          <Home />

        </Route>

        <Route path="/tmg">
          <Home />
        </Route>

        <Route path="/Football">
          <Football />
        </Route>

      </Switch>
    </Router>
  );
}

export default Routes;
