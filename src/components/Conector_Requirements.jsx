import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RequirementsTable from './RequirementsTable';
import AddRequirementWindow from './AddRequirementWindow';

function Conector_Requirements() {


    const createRequirementOption =() => {
      setDisplay(<AddRequirementWindow projectId={'Project-001'} requirementsOption={requirementsOption}/>);
    }

    const requirementsOption = () =>{
      setDisplay(<RequirementsTable projectId={'Project-001'} createRequirementOption={createRequirementOption}/>);
    }
      
    const [display, setDisplay] = useState(<RequirementsTable projectId={'Project-001'} createRequirementOption={createRequirementOption}/>);
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

export default Conector_Requirements;