import React from 'react';
import '../css/DiagramItem.css';

export default function DiagramItem({diagram}) {
    return (
        <tr>
            <td className="diagram-id">{diagram.id}</td>
            <td className="diagram-type">{diagram.type}</td>
        </tr>
    )
}
