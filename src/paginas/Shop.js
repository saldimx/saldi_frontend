import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router";
import image  from "../img/circled-s.png"; 
import '../css/style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const fb = <FontAwesomeIcon icon={faFacebook} />
const insta = <FontAwesomeIcon icon={faInstagram} /> 
const link = <FontAwesomeIcon icon={faLinkedin} /> 
const whats = <FontAwesomeIcon icon={faWhatsapp} /> 

export const Shop = () => {
 
	let {id} = useParams();
	console.log(id);
    return (
     
    <>
	<div className="container py-3">

	<header className="py-3 mb-4 border-bottom">
    <div className="container d-flex flex-wrap justify-content-center">
      <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
	  <img src={image} alt="Saldi"/>
        <span className="fs-4 fw-bold">Saldi</span>
      </a>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </header>      
	</div>

	<div className="container px-3 py-2">
		<div className="row">
			<div className="col-lg-4">
				<img 
					className="circular_image" 
					alt="100x100" 
					//src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" 
					src="https://images-platform.99static.com//6m2oEkLGOcAM-NspjIsGTF_x0do=/992x996:1866x1870/fit-in/500x500/projects-files/81/8156/815645/5513ffc1-e979-45e3-9684-6b725aa4df71.jpg"	
					data-holder-rendered="true"/>
			</div>
			<div className="col-lg-8">
				<h2 className="mt-2 display-6 lh-1 fw-bold">Venta de camisas</h2>
				<p className="fs-4">Encuentra las mejores camisas</p>
				<p className="fs-5 ">Entregas a domicilio</p>
				<p className="fs-5 "><span width="24" height="24">{whats}</span> +52 664 123 4567</p>
				<ul className="nav col-md-4 justify-content list-unstyled d-flex">
					<li className="ms-0"><a className="text-muted" href="/"><svg className="bi" width="24" height="24">{insta}</svg></a></li>
					<li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24">{fb}</svg></a></li>
					<li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24">{link}</svg></a></li>
				</ul>
			</div>
		</div>
	</div>
 
	<div className="container px-4 py-5" id="custom-cards">
	<h2 className="pb-2 border-bottom"> </h2>

	<div className="row">
		<div className="grid">
		<div className="card card-body">
			<img className="img-fluid img_p" src="https://cartzilla.createx.studio/img/shop/catalog/33.jpg" alt=""/>
				<p>PIX BAR PERFORMANCE WORKOUT TANK TOP</p><h3 className="text-left">$10</h3>
				<div className="textRight">
					<a className="p-2 link-secondary nodec" href="/products/2">Details</a>
					<button className="btn btn-color btn-sm mrigth-2">Add to cart</button>
				</div>
			</div>
			<div className="card card-body">
			<img className="img-fluid img_p" src="https://cartzilla.createx.studio/img/shop/catalog/33.jpg" alt=""/>
				<p>PIX BAR PERFORMANCE WORKOUT TANK TOP</p><h3 className="text-left">$10</h3>
				<div className="textRight">
					<a className="p-2 link-secondary nodec" href="/products/2">Details</a>
					<button className="btn btn-color btn-sm mrigth-2">Add to cart</button>
				</div>
			</div>
		</div>
		
	</div>	
	</div>
 

	<div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"> </svg>
        </a>
        <span className="mb-3 mb-md-0 text-muted">© 2022 Saldi, Co.</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24">{insta}</svg></a></li>
        <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24">{fb}</svg></a></li>
        <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24">{link}</svg></a></li>
      </ul>
    </footer>
  </div>
    </>
    )
};

    