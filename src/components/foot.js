import React  from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faTwitter} from "@fortawesome/free-brands-svg-icons"
import brand from "../img/brand.JPG";

const fb = <FontAwesomeIcon icon={faFacebook} />
const insta = <FontAwesomeIcon icon={faInstagram} /> 
const link = <FontAwesomeIcon icon={faLinkedin} /> 
const twitter = <FontAwesomeIcon icon={faTwitter} /> 



export const Foot = () => {
    return(
        <>
        <div className="container py-3">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
      
      
      </footer>
      </div>

      <footer className="py-8 py-md-11 bg-gray-200 ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <img src={brand} alt="..." className="footer-brand img-fluid mb-2" width="70px"/>
            <p className="text-gray-700 mb-2">
              Tu tienda en linea.
            </p>
    
 
            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item me-3">
                <a className="text-muted" href="https://www.instagram.com/saldi.mx/">{insta}</a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a className="text-muted" href="https://www.facebook.com/www.saldi.mx">{fb}</a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                  <a className="text-muted" href="https://www.facebook.com/www.saldi.mx">{twitter}</a>
              </li>
              <li className="list-inline-item list-social-item">
                <a className="text-muted" href="https://www.linkedin.com/company/saldi-mx/">{link}</a>
              </li>
            </ul>
    
          </div>
          <div className="col-6 col-md-4 col-lg-2">
    
       
            <h6 className="fw-bold text-uppercase text-gray-700">
              Productos
            </h6>
    
      
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="/" className="text-reset">
                  Salid Shop
                </a>
              </li>
              <li className="mb-3">
                <a href="/inventario" className="text-reset">
                  Saldi Inventario
                </a>
              </li>
              <li className="mb-3">
                <a href="/factura" className="text-reset">
                  Saldi Factura
                </a>
              </li>
            </ul>
    
          </div>
          <div className="col-6 col-md-4 col-lg-2">
    
        
            <h6 className="fw-bold text-uppercase text-gray-700">
              Recursos
            </h6>
    
         
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <a href="https://monumental-narwhal-a4b971.netlify.app/blog" target="_blank" rel="noopener noreferrer" className="text-reset">
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a href="https://monumental-narwhal-a4b971.netlify.app" target="_blank" rel="noopener noreferrer" className="text-reset">
                  Docs
                </a>
              </li>
            </ul>
    
          </div>
          <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
    
        
            <h6 className="fw-bold text-uppercase text-gray-700">
              Soporte
            </h6>
  
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="https://monumental-narwhal-a4b971.netlify.app/blog" target="_blank" rel="noopener noreferrer" className="text-reset">
                  Blog
                </a>
              </li>
            </ul>    
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold text-uppercase text-gray-700">
              Compa??ia
            </h6>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <a href="/about" className="text-reset">
                  Conocenos
                </a>
              </li>
              <li className="mb-3">
                <a href="/vacantes" target="_blank" rel="noopener noreferrer" className="text-reset">
                  Trabajos
                </a>
              </li>
              <li>
                <a href="/terminos" className="text-reset">
                  Terminos de uso
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </div> 
    </footer>
        </>
    )
};