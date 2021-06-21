import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Asside from './Asside'
import AssideAccount from './AssideAccount'
import Calendar from './Calendar';
import Header from './Header';
import Conector_Projects from './Conector_Projects';
import Conector_Requirements from './Conector_Requirements';
import Conector_archivos from './conector_archivos';
import Conector_Account_Settings from './conector_Account_Settings';
import Conector_Project_Settings from './Conector_Project_Settings';
import IntroductionSection from './IntroductionSection';
import ProjectSettings from './ProjectSettings';
import AccountSettings from './AccountSettings';
import Home from './Home';
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
        setDisplay(
          // <Router>
          // <Asside/>
          // <Switch>
              // <Route exact path='/' exact component={Conector_Projects}/>
              // <Route path='/projects' component={Conector_Projects}/>
              // {/* <Route path='/shared' component={}/> */}
              // <Route path='/calendar' component={Calendar}/>
              // {/* <Route path='/settings' component={}/> */}
          // </Switch>
          // </Router>
          <Router>
            <Asside/>
          <AssideAccount/>
          <Switch>
            {/* rutas para el usuario */}
            <Route exact path='/' exact component={Home}/>
            <Route path='/projects' component={Conector_Projects}/>
            {/* <Route path='/shared' component={}/> */}
            <Route path='/calendar' component={Calendar}/>
            <Route path='/settings' component={Conector_Account_Settings}/>
            
            {/* rutas para el proyecto */}
            <Route exact path='/' exact component={Conector_Projects}/>
            <Route path='/requirements' component={Conector_Requirements}/>
            <Route path='/intro' component={IntroductionSection}/>
            <Route path='/files' component={Conector_archivos}/>
            <Route path='/settingsProject' component={Conector_Project_Settings}/>
          </Switch>
          </Router>
          );
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