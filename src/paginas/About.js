import React  from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from "../components/slide";
 
export const About = () => {
    return (
        <>
		<div className="container">
      <div className="row">
        <div className="offset-lg-2 col-lg-8 col-md-12 col-12 mb-12">
   
          <h1 className="display-2 fw-bold mb-3">Hola, somos <span className="text-primary">Saldi</span></h1>
    
          <p className="h3 mb-3 ">Saldi es una plataforma que te permite tener tu propia tienda en internet totalmente GRATIS.</p>
          <p className="mb-0 h5 text-body lh-lg">Saldi es tu tienda en linea es una oportunidad para que incrementes tus ventas, tendras tu propia direccion web apra compartir con tus clientes o en tus redes sociales..</p>
        <br/>
		</div>
		
		<br/>
		<hr/>

		<div className="offset-lg-2 col-lg-8 col-md-12 col-12 mb-12">
   
		<h1 class="display-4 fw-bold mb-3">Conoce a nuestro equipo</h1>

		<div className="gallery mb-12">
		<Slider/>
      </div>
 </div>
      </div>

    </div>

        </>
      )
    };

    