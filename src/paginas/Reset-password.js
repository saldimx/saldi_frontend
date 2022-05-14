import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
 
export const Reset = () => {
    return (
        <>
	<main>
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		<div className="row align-items-center g-lg-5 py-5">
			<div className="col-md-10 mx-auto col-lg-5">
			<form className="p-4 p-md-5 border rounded-3 bg-light">
				<div className="form-floating mb-3">
				<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
				<label htmlFor="floatingInput">Correo electronico</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">Rstablecer Contraseña</button>
				<hr className="my-4"/>
				<div className="auth-option text-center pt-3">
              		<Link to="/login" className="app-link">Iniciar sesión</Link>
              		<span className="px-2">|</span> 
              		<Link to="/signup" className="app-link">Crear cuenta</Link>
            	</div>
			</form>
			</div>
		</div>
		</div>
	</main> 
        </>
      )
    };