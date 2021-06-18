import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CreateProjectWindow from './CreateProjectWindow';
import Projects from './Projects';

function Conector_Projects() {

    const createProjectOption = () => {
        setDisplay(<CreateProjectWindow projectsOption={projectsOption} />);
    }
      
    const projectsOption = () => {
        setDisplay(<Projects createProjectOption={createProjectOption} />);
    }
      
    const [display, setDisplay] = useState(<Projects createProjectOption={createProjectOption} />);
    return (
        <>
        <div>
        <div>
          {display}
        </div>
      </div>
      </>
    )
}

export default Conector_Projects;