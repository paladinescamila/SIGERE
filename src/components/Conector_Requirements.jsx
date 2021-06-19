import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RequirementsTable from './RequirementsTable';
import RequirementCard from './RequirementCard';
import RequirementItem from './RequirementItem';

function Conector_Requirements() {

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