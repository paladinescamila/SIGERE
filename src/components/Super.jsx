import React, {Fragment, useState, useRef, useEffect} from 'react';
import Login from './Login'
import Signup from './Signup'
import Asside from './Asside'
import AssideAccount from './AssideAccount'
import worker_asside from './worker_asside';

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
        setDisplay(<worker_asside />);
      }
      
      const [display, setDisplay] = useState(<Login signupOption={signupOption} profile={profile}/>);
    return (
        <>
        <div class="container">
            <div class="login-or-signup">
              {display}
            </div>
        </div>
        </>
    )
}

export default Super;