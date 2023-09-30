import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import foto from './images/cafe.png';
import Form from 'react-bootstrap/Form';
import * as React from 'react';
import { useState } from 'react';

import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
    validatePassword(e.target.value);
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    setEmailValid(isEmailValid);
  };

  const validatePassword = (password) => {
    const isPasswordValid = password.length >= 6;
    setPasswordValid(isPasswordValid);
    console.log(passwordValid)
  };

  const clickSubmit = (e) => {
    e.preventDefault();

    console.log(emailValid);
    console.log(passwordValid);

      if(formData.email==="" || formData.password===""){
        setError("Debe ingresar un usuario y contraseña");
      }
      else if (!emailValid  || !passwordValid) {
        setError("Error de autenticación. Revise sus credenciales");
      } 
      else {
        setError("");
        setEmailValid(true);
        setPasswordValid(true);

        setFormData({ email: "", password: "" });
        navigate("/Cafe");
      }
  };

  const cancel = () => {

    setEmailValid(true);
    setPasswordValid(true);
    setFormData({ email: "", password: "" });
    setError("")

  }
  return (

      <div className='container-fluid'>

        <h3 className='titulo' align='left'>  El aroma mágico</h3>
        <hr></hr>

          <img src={foto} style={{width:"100%"}} alt="imagen de login"/> 
          <hr style={{marginTop:'15px'}}></hr>


        <div className='row' style={{ marginTop: '20px', marginBottom: '80px' }}>
          <div className='col' style={{ width: '100%', marginLeft: '20%', marginRight: '20%' }}>
            <h3 className='text' align='left' >Inicio de Sesión</h3>
            <div className='card flex-row'  style={{ alignItems: 'center' , borderRadius:'0%', background:'#E0BBBB33', boxShadow:'0px 4px 10px gray'}}>
              <div className='col'  align='center'>

                <div className='row' style={{width:'70%', marginTop: '20px'}}>
                  <h3 className='text' align='left' >Nombre de Usuario</h3>
                </div>
                <div className="row-flex" >       
                  <div className="input-group" style={{ width: '70%'}}>
                  <input
                      type="text"
                      className={`form-control ${!emailValid ? "is-invalid" : ""}`}
                      placeholder="Ingrese su correo"
                      aria-label="Correo"
                      aria-describedby="basic-addon2"
                      onChange={handleEmailChange}
                    />
                    {!emailValid && <div className="invalid-feedback">El correo electrónico es inválido</div>}
                  </div>
                </div>
                <div className='row' style={{ height: '20px' }}></div>
                <div className='row'  style={{width:'70%'}}>
                  <h3 className='text' align='left'>Contraseña</h3>
                </div>
                <div className="row-flex">
                  <div className="input-group" style={{ width: '70%' }}>
                    <input
                      type="password"
                      className={`form-control ${!passwordValid ? "is-invalid" : ""}`}
                      placeholder="Ingrese su contraseña"
                      aria-label="Contraseña"
                      aria-describedby="basic-addon2"
                      onChange={handlePasswordChange}
                    />
                    {!passwordValid && <div className="invalid-feedback">La contraseña debe tener minimo 6 caracteres</div>}                  
                    </div>
                </div>


                <div className="row">
                    <div className='col'>

                        <button className="text custom-buttonA" onClick={clickSubmit} >
                            Ingresar
                        </button>

                        <button className="text custom-buttonB" onClick={cancel}>
                            Cancelar
                        </button>

                    </div>
                </div>

                <div align='left' className="row" style={{marginLeft:"15%"}}>

                {error && <div className="alert" role='alert'> {error} </div>}
                </div>
              </div>
            </div>


          </div>

        </div>
        <h2 className='card-text' style={{marginBottom:'20px'}} >Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</h2>

      </div>
  );
}

export default Login;
