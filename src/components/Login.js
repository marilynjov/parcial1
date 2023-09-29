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
    const isPasswordValid = password.length >= 8;
  setPasswordValid(isPasswordValid);
  };

  const clickSubmit = () => {

    console.log(emailValid);
    console.log(passwordValid);

      if(formData.email===""|| formData.password===""){
        setError("Debe ingresar un usuario y contraseña");
      }
      else if (emailValid  && passwordValid) {
        setError("");
        navigate("/Cafe");

      } else {
        setError("Revise los valores ingresados");
      }

    setFormData({ email: "", password: "" });


  };

  const cancel = () => {

    setFormData({ email: "", password: "" });



  }
  return (
    <Form>
      <div className='container-fluid'>

      <h3 align='left'>  El aroma magico</h3>

      <div className='row' style={{  width:'100%' }}>

        <img src={foto} className="login" alt="imagen de login"/> 
      </div>

        <div className='row' style={{ marginTop: '50px', marginBottom: '120px' }}>
          <div className='col' style={{ width: '100%', marginLeft: '20%', marginRight: '20%' }}>
            
            <div className='card flex-row'  style={{ alignItems: 'center' , borderRadius:'0%', background:'#E0BBBB33'}}>
              <div className='col'  align='center'>

                <div className='row' style={{marginTop: '20px'}}>
                  <h7 >Nombre Usuario</h7>
                </div>
                <div className="row" >       
                  <div className="input-group" style={{ width: '260px'}}>
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
                <div className='row'>
                  <h7>Contraseña</h7>
                </div>
                <div className="row">
                  <div className="input-group" style={{ width: '260px' }}>
                    <input
                      type="password"
                      className={`form-control ${!passwordValid ? "is-invalid" : ""}`}
                      placeholder="Ingrese su contraseña"
                      aria-label="Contraseña"
                      aria-describedby="basic-addon2"
                      onChange={handlePasswordChange}
                    />
                    {!passwordValid && <div className="invalid-feedback">La contraseña es inválida</div>}                  </div>
                </div>

                <div className="row">
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>

                <div className="row">
                    <div className='col'>

                        <button className="custom-buttonA" onClick={clickSubmit} >
                            Aceptar
                        </button>

                        <button className="custom-buttonB" onClick={cancel}>
                            Cancelar
                        </button>

                </div>
                </div>
                <div className='row' style={{ height: '50px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Login;
