



import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import foto from './images/cafe.png';
import Form from 'react-bootstrap/Form';
import * as React from 'react';
import { useState } from 'react';


import './Login.css';

function DetalleCafe() {

    return(
        <div className='container' align ='center'>
            <div className='card'
              style={{marginTop:'20px', width:'80%'}}
              align ='center'
            >

            <h3>Cafe nombre</h3>

            <div className='row'>
                <img className='card-img' src={foto} alt="Ilstracion cafe"></img>
            </div>
            <div className='row'>
            <h7>Notas</h7>

            </div>

            <div className='row'>
            <h7>Cultivado a una altura de </h7>
            </div>

            <div className='row'>
            <h7>msnm </h7>
            </div>

            </div>


        </div>

    );
}

export default DetalleCafe;