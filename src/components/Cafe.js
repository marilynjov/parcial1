

import 'bootstrap/dist/css/bootstrap.min.css';

import foto from './images/cafe.png';
import {FormattedMessage} from 'react-intl';
import React, { useState,  useEffect } from "react";
import './Login.css'

function Cafe(){

  const [cafes, setdata] = useState([]);  
  const [selectedCafe, setSelectedCafe] = useState(null);
  const[i,seti]=useState(0);


   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/cafes");
        if (!response.ok) {
          throw new Error("Error al obtener la informacion de los cafes");
        }
        const cafes = await response.json();
        console.log(cafes)
        setdata(cafes);
        
      } catch (error) {
        console.error("\n Ha ocurrido un error procesando los datos:", error);
      }
    };
    fetchData();
  },[]);


  const fetchdetalle = async (id) => {
    
      try {
        const peticion = "http://localhost:3001/cafes/" + id;
        console.log(peticion);
        const response = await fetch(peticion);
        console.log(response) 
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del libro");
        }
        const data = await response.json();
        setSelectedCafe(data);
        console.log("Book details:", data);
      } catch (error) {
        console.error("\n Ha ocurrido un error procesando los datos:", error);
      }
    
  };

        
  const handleClick = (cafeId) => {
    fetchdetalle(cafeId)
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
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Region</th>
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