import React  from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <>
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-primary text-decoration-none fw-bold ">
              Saldi
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
              <li><a href="/about" className="nav-link px-2 link-dark">Nosotros</a></li>
            </ul>

            <div className="col-md-3 text-end">
              <Link to="/login" className="btn btn-outline-primary me-2">Inicio Sesion</Link>
              <Link to="/signup" className="btn btn-primary">Crear Cuenta</Link>
            </div>
        </header>
      </div>
        </>
    )
};