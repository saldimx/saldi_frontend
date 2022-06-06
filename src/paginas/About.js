import React  from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Slider } from "../components/slide";
 
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
   
		{/*<h1 class="display-4 fw-bold mb-3">Conoce a nuestro equipo</h1>*/}

		<div className="gallery mb-12">
		{/*<Slider/>*/}
      </div>


      <section class="pt-6 pt-md-8">
      <div class="container pb-6 pb-md-8 border-bottom">
        <div class="row align-items-center">
          <div class="col-12 col-md">

      
            <h3 class="fw-bold mb-1">
              Interested in joining our team?
            </h3>

           
            <p class="fs-lg text-muted mb-5 mb-md-0">
              Hit us up and we'll get in touch with you.
            </p>

          </div>
          <div class="col-12 col-md-auto">

         
            <a href="#!" class="btn btn-primary lift">
              Apply now
            </a>

          </div>
        </div>  
      </div>  
    </section>
    </div>
      </div>

    </div>

        </>
      )
    };

    