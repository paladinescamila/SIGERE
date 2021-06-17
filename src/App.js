import './css/App.css';
import Asside from './components/Asside';
import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Header } from './components/Header';
import RequirementsTable from './components/RequirementsTable';
import RequirementCard from './components/RequirementCard';
import CreateProjectWindow from './components/CreateProjectWindow';
import ProjectsList from './components/ProjectsList';
import IntroductionSection from './components/IntroductionSection';
import AccountSettings from './components/AccountSettings';
import ArtifactsTable from './components/ArtifactsTable';
import AssideAccount from './components/AssideAccount';
import Projects from './components/Projects';
import ArtifactCard from './components/ArtifactCard';
import requirementsData from "./data/requirementsData";
import artifactsData from "./data/artifactsData";
import AddRequirementWindow from './components/AddRequirementWindow';
import AddArtifactWindow from './components/AddArtifactWindow';
import CategoriesList from './components/CategoriesList';
import ProjectItem from './components/ProjectItem';
import CategoryCard from './components/AddCategoryWindow';


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
    <AccountSettings/>
    <AddArtifactWindow/>
    <AddRequirementWindow/>
    <ArtifactCard artifact={artifactsData[0]}/>
    <ArtifactsTable/>
    <CategoriesList/>
    <CategoryCard/>
    <CreateProjectWindow/>
    <Header/>
    <IntroductionSection/>
    <ProjectsList/>
    <RequirementCard requirement={requirementsData[0]}/>
    <RequirementsTable/>
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
