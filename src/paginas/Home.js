import React  from "react";
//import { Link } from "react-router-dom";
import { Who } from "../components/Who";
 
export const Home = () => {
    return (
        <>
  <div className="container py-4">
  <section className="pt-4 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">

        
            <img 
              src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png" 
              className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..." data-aos="fade-up" 
              data-aos-delay="100"/>

          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

 
            <h1 className="display-3 text-center text-md-start">
              Bienvendio a <span className="text-primary">Saldi</span>. <br/>
            </h1>

   
            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
            Una plataforma para que tengas tu tienda en internet totalmente <span className="text-primary fw-bold">gratis</span>.
            </p>

 
            <div className="text-center text-md-start">
              <a href="/shop/mock" className="btn btn-primary  ">
                Echa un vistazo <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
              </a>
            </div>

          </div>
        </div> 
      </div> 
    </section>
    <br/>
    <hr/>
     <br/> 
    <section className="py-8 py-md-11 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up">

   
            <div className="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>            </div>

 
            <h3>
              Construido para todos
            </h3>

      
            <p className="text-muted mb-6 mb-md-0">
              Esta plataforma es para todos. Negocio pequeño o negocio grande aqui puedes vender tus articulos.
            </p>

          </div>
          <div className="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">

         
            <div className="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>            </div>

         
            <h3>
              Diseñado para ser sencillo.
            </h3>

         
            <p className="text-muted mb-6 mb-md-0">
              Sabemos lo engorroso que puede ser administrar un sitio web. No te preocupes solo registrate y comparte.
            </p>

          </div>
          <div className="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

         
            <div className="icon text-primary mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>            </div>

       
            <h3>
              Documentamos para ti
            </h3>

          
            <p className="text-muted mb-0">
              si necesitas ayuda de como comenzar, no te preocupes. Contactanos y te ayudamos.
            </p>

          </div>
        </div>  
      </div>  
      <br/>
    </section>
  


  <br/>
<Who/>
  </div>


        </>
      )
    };