import React from 'react';
import '../css/ArtifactItem.css';

export default function ArtifactItem({artifact}) {
    return (
        <tr className="art-item">
            <td className="id">{artifact.id}</td>
            <td className="name">{artifact.name}</td>
            <td>{artifact.date}</td>
            <td>{artifact.category}</td>
        </tr>
    )
}
