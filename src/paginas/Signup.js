import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useNavigate } from "react-router-dom" 
//import '../css/portal.css';
import { Link } from "react-router-dom";
import { valida } from "../apis/password";





export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  //let {data:resp, isDAta:setResp} = useState('');
  let [mensaje, setMensaje] = useState('');
  //let [data, setData] = useState('');
  //const navigate = useNavigate();
  //if(!setResp){
  //  return (
  //  <div className="">
  //    <h1>El usurio se grabo con exito</h1> 
  //    <Link to="/login" className="text-link">Ya puedes iniciar sesion</Link>.
  //  </div>    
  //  );
  //}
  
//  function AlertaOn(props) {
//    return <div className="alert alert-danger">{mensaje}</div>;
//  }
//  function AlertaOff(props) {
//    return <h1>Please sign up.</h1>;
//  }
  
//  function Alerta(props) {
//    const isOn = props.isLoggedIn;
//    if (!isOn) {
//      return <AlertaOn />;
//    }
//    return <AlertaOff />;
//  }   
  //const API_BASE_URL = 'https://app-itj-bootcamp.herokuapp.com';
  const API_BASE_URL = 'http://localhost:5000';



  const handleSubmit = (e) =>{
  e.preventDefault();  
  setMensaje(mensaje = valida(pass1));
    if (pass1 !== pass2){
      setMensaje(mensaje = 'La contraseña no coincide');
      console.log(mensaje);
    }else{
      //const password = encriptar(pass);
        fetch(`${API_BASE_URL}/usuario?n=${name}&e=${email}&p=${pass1}`, {
        method: 'POST',
        //body: JSON.stringify(dataInfo),
        headers: {
          'Content-Type': 'application/json'
        },
      });
     
      //.then((res) => res.json())
//      .then(data => {
//        console.log('Success:', data);
//      })
//      .catch((error) => {
//        console.error('Error:', error);
//      });

    //  navigate('/exito', { replace: true });
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
			</div>
		</div>
		</div>
	</main>
        </>
      )
    };

    