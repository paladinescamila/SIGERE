import React from 'react';
import '../css/ArtifactItem.css';
import standardDate from '../functions/dateConverter';

export default function ArtifactItem({artifact}) {
    return (
        <tr className="art-item">
            <td className="id">{artifact.id}</td>
            <td className="name">{artifact.name}</td>
            <td>{standardDate(artifact.date)}</td>
            <td>{artifact.category}</td>
        </tr>
    )
}
