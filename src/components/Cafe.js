

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import foto from './images/cafe.png';
import Detalle from './DetalleCafe.js'
import Form from 'react-bootstrap/Form';
import * as React from 'react';
import { useState } from 'react';



function Cafe(){


    return(
    <div className='container-fluid'>

      <h3 align='left'>  El aroma magico</h3>

      <div className='row' style={{  width:'100%' }}>

        <img src={foto} className="login" alt="imagen de login"/> 
      </div>

      <div className='row' style={{  width:'100%' }}>


        <div className='col' style={{maxWidth:'50%'}}>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Region</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>

        
    </div>
    <div className='col'>
        <Detalle/>
        
    </div>

    </div>

    </div>

    

    
      );
}
export default Cafe;