import React from 'react';
import '../css/IntroductionSection.css';

export default function IntroductionSection() {

    return (
        <div className="introduction-inputs">
            <div className="purpose">
                <p>Propósito</p>
                <textarea></textarea>
            </div>
            <div className="scope">
                <p>Alcance</p>
                <textarea></textarea>
            </div>
            <div className="glossary">
                <p>Glosario</p>
                <textarea></textarea>
            </div>
            <div className="references">
                <p>Referencias</p>
                <textarea></textarea>
            </div>
            <div className="overview">
                <p>Apreciación global</p>
                <textarea></textarea>
            </div>
        </div>
    )
}
