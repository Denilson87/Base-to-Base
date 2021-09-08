import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Abstract from './pages/Abstract';
import Speakers from './pages/Speakers';
import Contacts from './pages/Contacts';
import Hotels from './pages/Hotels';
import Donations from './pages/Donations';
import Hospital from './pages/Hospital';
import Safety from './pages/Safety';
import Mozambique from './pages/Mozambique';
import Agend from './pages/Agend';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Payments from './pages/PaymentDetails';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/abstracts-submission" component={Abstract}/>
        <Route path="/speakers" component={Speakers}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/hotels" component={Hotels}/>
        <Route path="/donations" component={Donations}/>
        <Route path="/hospital" component={Hospital}/>
        <Route path="/safety" component={Safety}/>
        <Route path="/mozambique" component={Mozambique}/>
        <Route path="/agend" component={Agend}/>
        <Route path="/sign-in" component={Login}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/payments-details" component={Payments}/>
  
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;