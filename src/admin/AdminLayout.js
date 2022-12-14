import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom" 
import '../css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShop, faDashboard, faGear, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../components/userContext";

const tablero = <FontAwesomeIcon icon={faDashboard} />
const productos = <FontAwesomeIcon icon={faShop} />
const gear = <FontAwesomeIcon icon={faGear} />
const perfil = <FontAwesomeIcon icon={faUser} />
const ayuda = <FontAwesomeIcon icon={faQuestion} />

 
export const AdminLayout = () => {
  const {user, setUser} = useContext(UserContext);
  //console.log(user);
  const navigate = useNavigate();
  if (user===''){
    navigate('/login');
  }
  
  return(
    <>
    <header 
      className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#s">Saldi</a>
        <input 
          className="form-control form-control-dark w-100" 
          type="text" 
          placeholder="Search" 
          aria-label="Search">
        </input>
        <button 
          className="navbar-toggler position-absolute d-md-none collapsed" 
          type="button" data-bs-toggle="collapse" 
          data-bs-target="#sidebarMenu" 
          aria-controls="sidebarMenu" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button className="nav-link px-3" onClick={()=>setUser("")}>Logout</button>
          </div>
        </div>
      </header>
      <div className="container-fluid">
      <div className="row">
        <nav 
          id="sidebarMenu" 
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
              <Link 
                to="/admin/tablero"
                className='nav-link' 
              > {tablero} Tablero
              </Link>
              </li>
              <li className="nav-item">
              <Link 
                to="/admin/productos"
                className='nav-link' 
              > {productos} Productos
              </Link>
              </li>
            </ul>
            <hr/>
            <ul className="nav flex-column">
              <li className="nav-item">
              <Link 
                to="/admin/ajustes"
                className='nav-link' 
              > {gear} Ajustes
              </Link>
              </li>
              <li className="nav-item">  
              <Link 
                to="/admin/perfil/"
                className='nav-link' 
              > {perfil} Perfil
              </Link>
          
              <Link 
                to="/admin/ayuda"
                className='nav-link' 
              > {ayuda} Ayuda
              </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <br/>
          <Outlet/>    
        </main>
      </div>
    </div>
    </>
      )
    };

    