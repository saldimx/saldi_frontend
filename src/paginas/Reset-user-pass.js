import React, { useState }  from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
 
export const Restoreuser = () => {
	const [newPass, setNewPass] = useState('');
	const [newPassConf, setNewPassConf] = useState('');
	let [mensaje, setMensaje] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) =>{
		e.preventDefault();  
		if (newPass.length <= 8 ){
			setMensaje(mensaje = 'La contraseña debe de tener almenos 8 caracteres');
			console.log(mensaje);
		}else{
			if (newPass !== newPassConf){
				setMensaje(mensaje = 'La contraseña no coincide');
				console.log(mensaje);
			}else{
				//Fetch endpoint to update password	

				navigate('/mensaje/c', { replace: true });
			}
		}
		
	}
    return (
        <>
	<main>
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		<div className="row align-items-center g-lg-5 py-5">
			<div className="col-md-10 mx-auto col-lg-5">
			<form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
				<div className="form-floating mb-3">
				<input 
					type="password" 
					className="form-control" 
					id="floatingInput" 
					placeholder="name@example.com"
					onChange={e=>setNewPass(e.target.value)}/>
				<label htmlFor="floatingInput">Nueva Contraseña</label>
				</div>
				<div className="form-floating mb-3">
				<input 
					type="password" 
					className="form-control" 
					id="floatingInput" 
					placeholder="name@example.com"
					onChange={e=>setNewPassConf(e.target.value)}/>
				<label htmlFor="floatingInput">Confirmar Contraseña</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">Restablecer Contraseña</button>
				<hr className="my-4"/>
				<div className="auth-option text-center pt-3">
              		<Link to="/login" className="app-link">Iniciar sesión</Link>
              		<span className="px-2">|</span> 
              		<Link to="/signup" className="app-link">Crear cuenta</Link>
            	</div>
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