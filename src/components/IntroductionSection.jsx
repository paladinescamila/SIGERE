import React from 'react';
import '../css/IntroductionSection.css';

export default function IntroductionSection() {

    return (
        <div className="page">
            <div className="introduction-inputs">
                <div className="purpose">
                    <p>Propósito</p>
                    <textarea className="textarea"></textarea>
                </div>
                <div className="scope">
                    <p>Alcance</p>
                    <textarea className="textarea"></textarea>
                </div>
                <div className="glossary">
                    <p>Glosario</p>
                    <textarea className="textarea"></textarea>
                </div>
                <div className="references">
                    <p>Referencias</p>
                    <textarea className="textarea"></textarea>
                </div>
                <div className="overview">
                    <p>Apreciación global</p>
                    <textarea className="textarea"></textarea>
                </div>
                <button className="solid-button">Guardar</button>
            </div>
        </div>
    )
}
