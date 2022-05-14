import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
 
export const Home = () => {
    return (
        <>
<div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#a" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#a" className="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#a" className="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#a" className="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#a" className="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-outline-primary me-2">Inicio Sesion</Link>
        <Link to="/signup" className="btn btn-primary">Crear Cuenta</Link>
      </div>
    </header>
  </div>

 
          <main>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 fw-normal">Punny headline</h1>
              <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
              <a className="btn btn-outline-secondary" href="#a">Coming soon</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>
          </main>
        </>
      )
    };