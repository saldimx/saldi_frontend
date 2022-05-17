import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router";
 





export const Shop = () => {
 
let {id} = useParams();
  
    return (
     
        <>
    <main>
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
		<div className="row align-items-center g-lg-5 py-5">
			<div className="col-lg-7 text-center text-lg-start">
			<h1 className="display-4 fw-bold lh-1 mb-3">Shop</h1>
			<p className="col-lg-10 fs-4"> {id} </p>
			</div>
		</div>
		</div>
	</main>
        </>
      )
    };

    