import React, {Fragment, useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ArtifactCard from './ArtifactCard';
import ArtifactsTable from './ArtifactsTable';
import DiagramsTable from './DiagramsTable';
import AddArtifactWindow from './AddArtifactWindow';
import AddDiagramWindow from './AddDiagramWindow';
import DiagramCard from './DiagramCard';

import diagramsData from '../data/diagrams';
import artifactsData from '../data/artifacts';
import "../css/files.css";
function Conector_archivos() {

    const artifactDiagramsOption = () =>{
        setDisplay(
            <div>
                <div className="flex-align">
                    <h2>Artefactos</h2>
                    <ArtifactsTable projectId={'Project-001'} createArtifactOption={createArtifactOption}/>
                </div>
                <div className="flex-align add-margin">
                    <h2>Diagramas</h2>
                    <DiagramsTable projectId={'Project-001'} createDiagramOption={createDiagramOption}/>
                </div>
            </div>
        );
    };

    const createArtifactOption = () => {
        setDisplay(<AddArtifactWindow projectId={'Project-001'} artifactDiagramsOption={artifactDiagramsOption} viewArtifact={viewArtifact}/>);
    };
    const createDiagramOption = () => {
        setDisplay(<AddDiagramWindow projectId={'Project-001'} artifactDiagramsOption={artifactDiagramsOption} viewDiagram={viewDiagram}/>);
    };

    const viewArtifact = () => {
        setDisplay(<ArtifactCard artifact={artifactsData['Project-001'][0]} artifactDiagramsOption={artifactDiagramsOption}/>);
    };

    const viewDiagram = () => {
        setDisplay(<DiagramCard diagram={diagramsData['Project-001'][0]} artifactDiagramsOption={artifactDiagramsOption}/>);
    };

    const [display, setDisplay] = useState(
    <div>
        <div className="flex-align">
            <h2>Artefactos</h2>
            <ArtifactsTable projectId={'Project-001'} createArtifactOption={createArtifactOption} viewArtifact={viewArtifact}/>
        </div>
        <div className="flex-align add-margin">
            <h2>Diagramas</h2>
            <DiagramsTable projectId={'Project-001'} createDiagramOption={createDiagramOption} viewDiagram={viewDiagram}/>
        </div>
        
    </div>);

    return (
        <>
        <div>
            <div className="page">
                {display}
            </div>
        </div>
        </>
    )
}

export default Conector_archivos;
