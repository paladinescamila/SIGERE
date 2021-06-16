import './css/App.css';
import Asside from './components/Asside.jsx';
import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Login } from './components/Login.jsx';
import { Signup } from './components/Signup.jsx';
import { Header } from './components/Header.jsx';
import RequirementsTable from './components/RequirementsTable.jsx';
import RequirementCard from './components/RequirementCard.jsx';
import CreateProjectWindow from './components/CreateProjectWindow.jsx';
import ProjectsList from './components/ProjectsList.jsx';
import IntroductionSection from './components/IntroductionSection.jsx';
import AccountSettings from './components/AccountSettings.jsx';
import ArtifactsTable from './components/ArtifactsTable.jsx';
import AssideAccount from './components/AssideAccount';
import Projects from './components/Projects';
import ArtifactCard from './components/ArtifactCard.jsx';
import requirementsData from "./data/requirementsData";
import artifactsData from "./data/artifactsData";
import AddRequirementWindow from './components/AddRequirementWindow.jsx';
import AddArtifactWindow from './components/AddArtifactWindow.jsx';


function App() {

  const loginOption = () => {
    setDisplay(<Login signupOption={signupOption} />);
  }
  
  const signupOption = () => {
    setDisplay(<Signup loginOption={loginOption} />);
  }
  
  const [display, setDisplay] = useState(<Login signupOption={signupOption} />);
  
  return (
    <>
    {/* <Router>
      <AssideAccount/>
      <Switch>
        <Route path='/' exact component={Projects}/>
        <Route path='/requirements' component={AccountSettings}/>

      </Switch>
    </Router> */}
      <div class="container">
        <div class="login-or-signup">
          {display}
        </div>
      </div>
    </>
  );
}

export default App;
