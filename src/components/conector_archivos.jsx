import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ArtifactCard from './ArtifactCard';
import ArtifactsTable from './ArtifactsTable';
import DiagramsTable from './DiagramsTable';
import AddArtifactWindow from './AddArtifactWindow';
import AddDiagramWindow from './AddDiagramWindow';
function Conector_archivos() {

    const artifactDiagramsOption = () =>{
        setDisplay(
            <div>
                <ArtifactsTable projectId={'Project-001'} createArtifactOption={createArtifactOption}/>
                <DiagramsTable projectId={'Project-001'} createDiagramOption={createDiagramOption}/>
            </div>
        );
    };

    const createArtifactOption = () => {
        setDisplay(<AddArtifactWindow projectId={'Project-001'} artifactDiagramsOption={artifactDiagramsOption}/>);
    };
    const createDiagramOption = () => {
        setDisplay(<AddDiagramWindow projectId={'Project-001'} artifactDiagramsOption={artifactDiagramsOption}/>);
    };

    const [display, setDisplay] = useState( <div>
        <ArtifactsTable projectId={'Project-001'} createArtifactOption={createArtifactOption}/>
        <DiagramsTable projectId={'Project-001'} createDiagramOption={createDiagramOption}/>
    </div>);

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

export default Conector_archivos;
