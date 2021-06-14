import './css/App.css';
import Asside from './components/Asside.jsx';
import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Login } from './components/Login.jsx';
import { Signup } from './components/Signup.jsx';
import { Header } from './components/Header.jsx';


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
      <Header />
      
      {/* <div class="container">
        <div class="login-or-signup">
          {display}
        </div>
      </div> */}


    </>
  );
}

export default App;
