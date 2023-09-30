

import 'bootstrap/dist/css/bootstrap.min.css';

import foto from './images/cafe.png';
import Detalle from './DetalleCafe.js'
import {FormattedMessage} from 'react-intl';
import React, { useState } from 'react';
import CafeDetail from './DetalleCafe';
import './Login.css'

import './Login.css'

function Cafe(){

    

  const cafes = [
    {
      id: 1,
      nombre: "Café Especial para tí",
      tipo: "Blend",
      region: "Angelópolis, Antioquia",
      notas: "Panela, Durazno, Caramelo",
      fecha_cultivo: "2023-01-18",
      altura: 1920,
      imagen:
        "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true",
    },
    {
      id: 2,
      nombre: "Café Especial Navegante",
      tipo: "Café de Origen",
      region: "Guatapé, Antioquia",
      notas: "Cítrico, Naranja, Cacao",
      fecha_cultivo: "2023-02-10",
      altura: 1800,
      imagen:
        "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-navegante-cafe-colombiano-1_720x.png?raw=true",
    },
    {
      id: 3,
      nombre: "Café Especial El Poeta",
      tipo: "Blend",
      region: "Gómez Plata, Antioquia",
      notas: "Notas Dulces, Vino y Frutos Rojos",
      fecha_cultivo: "2023-03-11",
      altura: 1800,
      imagen:
        "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-poeta-cafe-colombiano_720x.png?raw=true",
    },
    {
      id: 4,
      nombre: "Café Especial Valentina",
      tipo: "Café de Origen",
      region: "Fredonia, Antioquia",
      notas: "Chocolate, Cáscara de limón, Nuez",
      altura: 1700,
      imagen:
        "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-valentina-cafe-colombiano_1_720x.png?raw=true",
    },
    {
      id: 5,
      nombre: "Café Especial Sombrero Vueltiao",
      tipo: "Café de Origen",
      region: "Amagá, Antioquia",
      notas: "Chocolate, Frutos secos, Frutos rojos, Caña de azúcar",
      fecha_cultivo: "2023-04-12",
      altura: 1450,
      imagen:
        "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png?raw=true",
    },
    {
      id: 6,
      nombre: "Café Especial La Guacamaya",
      tipo: "Café de Origen",
      region: "Amagá, Antioquia",
      notas: "Chocolate, Frutos Secos, Frutos Rojos y Caña de Azúcar",
      fecha_cultivo: "2023-05-13",
      altura: 1450,
      imagen:
        "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-guacamayo2-cafe-colombiano-f_720x.png?raw=true",
    },
  ];
  
  const [selectedCafe, setSelectedCafe] = useState(null);

  const handleClick = (cafeId) => {
    setSelectedCafe(cafes[cafeId-1]);
  };


    return(
    <div className='container-fluid'>

        <h3 className='titulo' align='left'>  El aroma mágico</h3>
        <hr></hr>

          <img src={foto} style={{width:"100%"}} alt="imagen de login"/> 
          <hr style={{marginTop:'15px'}}></hr>

      <div className='row' style={{  width:'100%', marginBottom:'30px'}}>


      <div className='col-8' style={{maxWidth:'50%'}}>
        <table className="table">
            <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Nombre"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Tipo"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Region"/> 
            </th>
          </tr>
          </thead>
            <tbody >

            {cafes.map((cafe) => (
              <tr key={cafe.id} >
          
                <td onClick={() => handleClick(cafe.id)}>
                    {cafe.id}</td>
                <td                     
                  onClick={() => handleClick(cafe.id)}>
                  {cafe.nombre}</td>
                <td onClick={() => handleClick(cafe.id)}>
                  {cafe.tipo}</td>
                <td onClick={() => handleClick(cafe.id)}>
                  {cafe.region}</td>
              </tr>
            ))}
              
            </tbody>
        </table>

        
    </div>

    <div className='col' align='center' >

      {selectedCafe && (
        
        <div className='card-detalle'
        style={{marginTop:'20px' }}
        align ='center'
         >

            <div className='row'>
              <td className='card-title'>{selectedCafe.nombre}</td>
              <td>{selectedCafe.fecha_cultivo}</td>

            </div>

            <div className='row-flex'>
              <img variant="top" src={selectedCafe.imagen} alt={selectedCafe.title} style={{height:'150px', marginTop:'10px'}} />
            </div>

            <div> 
              
            <div className='row'>
              <td className='card-text'>Notas</td> 
              <td className='card-text'>{selectedCafe.notas}</td>
              <td className='card-altura'>Cultivado a una altura de {selectedCafe.altura}</td>

            </div>
           
            </div> 
          </div>
      )}
       </div>

    {/* <div className='col'>
      {selectedCafe !== null && <CafeDetail cafeId={selectedCafe} />}        
    </div> */}

    </div>

    <h2 className='card-text'  style={{marginBottom:'20px'}} >Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</h2>

    </div>

    
      );
}

export default Cafe;