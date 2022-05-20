import React  from "react";
 

import { useParams } from "react-router";



export const Mensaje = () => {
 
	let {id} = useParams();
	let text1 ="";
	let text2 ="";
	if (id === "a"){
		text1 = "Valida tu cuenta";
		text2 =  "Hemos enviado un correo electronico a tu cuenta, revisalo para poder iniciar sesion."
	}

	if (id === "b"){
		text1 = "Restablecer contraseña";
		text2 =  "Hemos enviado un correo electronico a tu cuenta, revisalo para poder restablecer tu contraseña."
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

    