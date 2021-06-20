import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RequirementsTable from './RequirementsTable';
import AddRequirementWindow from './AddRequirementWindow';
import RequirementCard from './RequirementCard';
import requirementsData from '../data/requirements';
function Conector_Requirements() {


    const createRequirementOption =() => {
      setDisplay(<AddRequirementWindow projectId={'Project-001'} requirementsOption={requirementsOption}/>);
    };

    const requirementsOption = () =>{
      setDisplay(<RequirementsTable projectId={'Project-001'} createRequirementOption={createRequirementOption} viewRequirement={viewRequirement}/>);
    };
    const viewRequirement = () => {
      setDisplay(<RequirementCard requirement={requirementsData['Project-001'][2]} requirementsOption={requirementsOption}/>);
    };
      
    const [display, setDisplay] = useState(<RequirementsTable projectId={'Project-001'} createRequirementOption={createRequirementOption} viewRequirement={viewRequirement}/>);
    return (
        <>
        <div>
        <div className="page">
          <div><h2>Requisitos</h2></div>
          {display}
        </div>
      </div>
      </>
    )
}

export default Conector_Requirements;