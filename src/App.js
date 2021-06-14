import './css/App.css';
import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Login } from './components/Login.jsx';
import { Signup } from './components/Signup.jsx';
import { Header } from './components/Header.jsx';
import ProjectCard from './components/ProjectCard.jsx';

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
      {/* <div class="container">
        <div class="login-or-signup">
          {display}
        </div>
      </div> */}
      <Header />
    </>
  );
}

export default App;
