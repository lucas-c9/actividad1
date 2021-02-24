import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import { Label } from 'semantic-ui-react'
import {
Link
} from "react-router-dom";


function Inicio() {
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);
return (
    <div className="App">
    <header className="App-header">
        <div>
            <div class="ui red circular label">M</div>
            <div class="ui orange circular label">E</div>
            <div class="ui yellow circular label">R</div>
            <div class="ui olive circular label">N</div>
            <div class="ui green circular label">-</div>
            <div class="ui teal circular label">S</div>
            <div class="ui blue circular label">T</div>
            <div class="ui violet circular label">A</div>
            <div class="ui purple circular label">C</div>
            <div class="ui pink circular label">K</div>
            <div class="ui brown circular label">2</div>
            <div class="ui grey circular label">0</div>
            <div class="ui black circular label">2</div>
            <div class="ui brown circular label">1</div>
        </div>
        <Button variant="light" className="mr-2"><Link to="/Bloque2">Bloque2</Link></Button>
    </header>
    </div>
    
);
}

export default Inicio;