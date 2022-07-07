import React  from "react";
 

import { useParams } from "react-router";



export const Mensaje = () => {
 
	let {id} = useParams();
	let text1 ="";
	let text2 ="";

	switch(id) {
		case "a":
			text1 = "Valida tu cuenta";
			text2 =  "Hemos enviado un correo electronico a tu cuenta, revisalo para poder iniciar sesion."
		  break;
		case "b":
			text1 = "Restablecer contraseña";
			text2 =  "Hemos enviado un correo electronico a tu cuenta, revisalo para poder restablecer tu contraseña."
		  break;
		case "c":
			text1 = "Tu Contraseña ha sido restablecida";
			text2 =  "Te hemos enviado un correo electronico a tu cuenta, revisalo para poder iniciar sesion."
			break;
		default:
		  // code block
	  }

  
    return (
     
        <>
    <main>
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		<div className="row align-items-center g-lg-5 py-5">
			<div className="col-lg-7 text-center text-lg-start">
			<h1 className="display-4 fw-bold lh-1 mb-3">{text1}</h1>
			<p className="col-lg-10 fs-4">{text2}</p>
			</div>
		</div>
		</div>
	</main>
        </>
      )
    };

    