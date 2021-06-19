import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Asside from './Asside'
import AssideAccount from './AssideAccount'
import worker_asside from './worker_asside';
import Calendar from './Calendar';
import Header from './Header';
import Conector_Projects from './Conector_Projects';
import Conector_Requirements from './Conector_Requirements';
import IntroductionSection from './IntroductionSection';
//CSS
import '../css/App.css'


function Super() {
    const loginOption = () => {
        setDisplay(<Login signupOption={signupOption} profile={profile}/>);
      }
      
      const signupOption = () => {
        setDisplay(<Signup loginOption={loginOption} />);
      }

      const profile = () => {
        setDisplay(<Router>
          <Asside/>
          <Switch>
              <Route exact path='/' exact component={Conector_Projects}/>
              <Route path='/projects' component={Conector_Projects}/>
              {/* <Route path='/shared' component={}/> */}
              <Route path='/calendar' component={Calendar}/>
              {/* <Route path='/settings' component={}/> */}
          </Switch>
          </Router>);
      }

      const projectsAsside = () => {
        setDisplay(
          <Router>
          <AssideAccount/>
          <Switch>
            <Route exact path='/' exact component={Conector_Projects}/>
            <Route path='/requirements' component={Conector_Requirements}/>
            <Route path='/intro' component={IntroductionSection}/>
          </Switch>
          </Router>
        )
      }
      
      const [display, setDisplay] = useState(<Login signupOption={signupOption} profile={profile}/>);
    return (
        <>
        <div >
            <div>
              {display}
            </div>
        </div>
        
        </>
    )
}

export default Super;