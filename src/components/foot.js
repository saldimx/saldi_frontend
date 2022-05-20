import React  from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"

const fb = <FontAwesomeIcon icon={faFacebook} />
const insta = <FontAwesomeIcon icon={faInstagram} /> 
const link = <FontAwesomeIcon icon={faLinkedin} /> 

export const Foot = () => {
    return(
        <>
        <div className="container py-3">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <span className="text-muted">© 2022 Saldi, Co.</span>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3"><a className="text-muted" href="/">{fb}</a></li>
              <li className="ms-3"><a className="text-muted" href="/">{insta}</a></li>
              <li className="ms-3"><a className="text-muted" href="/">{link}</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Productos</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Saldi Shop</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Saldi Inventario</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Saldi Factura</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Links</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Blog</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Tiendas</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Documentacion</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Conocenos</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Equipo</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Privacidad</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Terminos</a></li>
            </ul>
          </div>
        </div>
      </footer>
      </div>
        </>
    )
};