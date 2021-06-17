import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './css/App.css';

// DATA
import requirementsData from './data/requirements';
import artifactsData from './data/artifacts';
import projectsData from './data/projects.js';
import usersData from './data/users.js';

// COMPONENTS
import Login from './components/Login';
import Signup from './components/Signup';
import AccountSettings from './components/AccountSettings';
import Header from './components/Header';
import Asside from './components/Asside';
import AssideAccount from './components/AssideAccount';
import IntroductionSection from './components/IntroductionSection';
import RequirementsTable from './components/RequirementsTable';
import RequirementCard from './components/RequirementCard';
import AddRequirementWindow from './components/AddRequirementWindow';
import Projects from './components/Projects';
import ProjectsList from './components/ProjectsList';
import CreateProjectWindow from './components/CreateProjectWindow';
import ProjectSettings from './components/ProjectSettings';
import ArtifactsTable from './components/ArtifactsTable';
import ArtifactCard from './components/ArtifactCard';
import AddArtifactWindow from './components/AddArtifactWindow';
import CategoriesList from './components/CategoriesList';
import AddCategoryWindow from './components/AddCategoryWindow';
import DiagramsTable from './components/DiagramsTable';


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
    {/* <AccountSettings email={'pepito@sigere.com'}/>
    <AddArtifactWindow projectId={'Project-001'}/>
    <AddRequirementWindow projectId={'Project-001'}/>
    <ArtifactCard artifact={artifactsData['Project-001'][0]}/>
    <ArtifactsTable projectId={'Project-001'}/>
    <CategoriesList/>
    <AddCategoryWindow/>
    <CreateProjectWindow/>
    <Header/>
    <IntroductionSection/>
    <ProjectsList/>
    <RequirementCard requirement={requirementsData['Project-001'][2]}/>
    <RequirementsTable projectId={'Project-001'}/>
    <ProjectSettings projectId={'Project-001'}/> */}
    <DiagramsTable projectId={'Project-001'}/>
    {/* <Router>
      <AssideAccount/>
      <Switch>
        <Route path='/' exact component={Projects}/>
        <Route path='/requirements' component={AccountSettings}/>

      </Switch>
    </Router> */}
      {/* <div class="container">
        <div class="login-or-signup">
          {display}
        </div>
      </div> */}
    </>
  );
}

export default App;
