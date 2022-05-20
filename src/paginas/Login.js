import React  from "react";
import { Link } from "react-router-dom";
 
export const Login = () => {
    return (
        <>
	<main>
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		<div className="row align-items-center g-lg-5 py-5">
			<div className="col-lg-7 text-center text-lg-start">
			<h1 className="display-4 fw-bold lh-1 mb-3">Inicia sesión a tu cuenta</h1>
			<p className="col-lg-10 fs-4">Inicia sesión y administra tu usuario de ventas.</p>
			</div>
			<div className="col-md-10 mx-auto col-lg-5">
			<form className="p-4 p-md-5 border rounded-3 bg-light">
				<div className="form-floating mb-3">
				<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
				<label htmlFor="floatingInput">Correo electronico</label>
				</div>
				<div className="form-floating mb-3">
				<input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
				<label htmlFor="floatingPassword">Contraseña</label>
				</div>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me"/> Recordar
					</label>
					<label className="text-ar">
						<Link to="/reset" className="">Olvidaste tu contraseña?</Link>
					</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
				<hr className="my-4"/>
				<small className="text-muted">No tienes cuenta? Date de alta <Link to="/signup" className="text-link">Aqui.</Link></small>
			</form>
			</div>
		</div>
		</div>
	</main>
        </>
      )
    };