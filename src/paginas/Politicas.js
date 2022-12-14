import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight} from "@fortawesome/free-solid-svg-icons"

const arrow = <FontAwesomeIcon icon={faArrowRight} />
 
export const Politicas = () => {
    return (
        <>
    <section className="pt-8 pt-md-11 bg-gradient-light-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6 aos-init aos-animate" data-aos="fade-right">
            <h2>
              Politicas de empleo 
              <span className="text-primary"> Saldi</span>.
            </h2>
            <p className="fs-lg text-muted mb-6">
            Reconocemos que nuestros empleados pueden tener un alto rendimiento donde sea que trabajen siempre y cuando se sienta comodos y valorados. 
            </p>
            <div className="d-flex">
              <div className="icon text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>   </div>
              <div className="ms-5">
                <h4 className="mb-1">
                  Remote First Company.
                </h4>
                <p className="text-muted mb-6">
                Esta opcion de trabajo te permite colaborar con nosotros desde cualquier parte del pais.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-6">
            <div className="w-md-150 w-lg-130 position-relative aos-init aos-animate" data-aos="fade-left">
              <div className="shape shape-fluid-y shape-blur-4 text-gray-200">
                <div className="img-skewed img-skewed-start">          
                  <img 
                    src="https://www.zeilikmanlaw.com/wp-content/uploads/2021/06/work_from_home.jpg" 
                    className="screenshot img-fluid img-skewed-item" alt="..."/>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>  
    </section>

    <section data-jarallax="" data-speed=".8" 
  className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax v" 
  data-jarallax-original-styles="background-image: url(assets/img/covers/cover-13.jpg);">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">

            <h1 className="display-2 text-white">
              Want to work with us?
            </h1>

            <p className="lead text-white-75 mb-6">
              Estamos en busqueda de el mejor talento para que se unan al equipo Saldi. Dise??adores, Ingenieros y Finanzas.
            </p>
   
            <a href="/vacantes" className="btn btn-primary lift">
              Mira las posiciones disponibles <i className="fe fe-arrow-right ms-3">{arrow}</i>
            </a>
          </div>
        </div> 
      </div> 
    <div 
      id="jarallax-container-0" 
      className="s1">
        <div className="s2"></div>
    </div>
  </section>
        </>
      )
    };

    