import React from 'react';
import ArtifactCard from './ArtifactCard';
import ArtifactsTable from './ArtifactsTable';
import DiagramsTable from './DiagramsTable';

function conector_archivos() {
    return (
        <div>
        <ArtifactsTable projectId={'Project-001'}/>
        <DiagramsTable projectId={'Project-001'}/>
        </div>
    )
}

export default conector_archivos
