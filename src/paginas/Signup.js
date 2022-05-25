import React, { useState }  from "react";
import { useNavigate } from "react-router-dom" 
import { Link } from "react-router-dom";
import { API_URL } from "../apis/endpoint";

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  let [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) =>{
  e.preventDefault();  
    if (pass1.length <= 8 ){
      setMensaje(mensaje = 'La contraseña debe de tener almenos 8 caracteres');
    }else{
      if (pass1 !== pass2){
        setMensaje(mensaje = 'La contraseña no coincide');
        console.log(mensaje);
      }else{
          //pass1 = sha256(pass1).toString();//mn01
          const cryptoSHA256 = require("crypto-js/sha256");
          const passX = cryptoSHA256(pass1);

          fetch(`${API_URL}/usuario?n=${name}&e=${email}&p=${passX}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        navigate('/mensaje/a', { replace: true });
      } 
    } 
  }

  
    return (
     
        <>
    <main>
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		<div className="row align-items-center g-lg-5 py-5">
			<div className="col-lg-7 text-center text-lg-start">
			<h1 className="display-4 fw-bold lh-1 mb-3">Crear cuenta</h1>
			<p className="col-lg-10 fs-4">Al crear tu cuenta inmediatamente puedes crear tu sitio y vender tus propios productos.</p>
			</div>
			<div className="col-md-10 mx-auto col-lg-5">
			<form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
      <div className="form-floating mb-3">
				<input type="text" 
          className="form-control" 
          id="floatingInput" 
          placeholder="Alex"
          onChange={e=>setName(e.target.value)}/>
				<label htmlFor="floatingInput">Nombre </label>
				</div>
				<div className="form-floating mb-3">
				<input 
          type="email" 
          className="form-control" 
          id="floatingInput" 
          placeholder="name@example.com"
          onChange={e=>setEmail(e.target.value)}/>
				<label htmlFor="floatingInput">Correo electronico</label>
				</div>
				<div className="form-floating mb-3">
				<input 
          type="password" 
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password"
          onChange={e=>setPass1(e.target.value)}/>
				<label htmlFor="floatingPassword">Contraseña</label>
        <small className="text-muted">La contraseña debe de tener almenos 8 caracteres </small>
				</div>
        <div className="form-floating mb-3">
				<input 
          type="password" 
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password"
          onChange={e=>setPass2(e.target.value)}/>
				<label htmlFor="floatingPassword">Confirmar contraseña</label>
				</div>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me"/> Estoy de acuerdo con los <Link to="/" className="">terminos</Link> y <Link to="/" className="">condiciones</Link>
					</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">Continuar</button>
				<hr className="my-4"/>
				<small className="text-muted">Ya tengo cuenta <Link to="/login" className="text-link">Iniciar Sesión</Link></small>
			</form>
      <br/>
      { mensaje ? 
      <div className="alert alert-danger" role="alert">
        {mensaje}
      </div> : ""}
      
			</div>
		</div>
		</div>
	</main>
        </>
      )
    };

    