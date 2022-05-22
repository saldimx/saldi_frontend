import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const plus = <FontAwesomeIcon icon={faPlus} /> 

 
export const Productos = () => {
 
  return (
    <>
           <div className="container-xl">
		  <div className="row g-3 mb-4 align-items-center justify-content-between">
				    <div className="col-auto">
			            <h1 className="app-page-title mb-0">Productos</h1>
				    </div>
				    <div className="col-auto">
					     <div className="page-utilities">
						    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
							    <div className="col-auto">						    
								    <a className="btn app-btn-secondary" href="/">
									{plus} Agregar
									</a>
							    </div>
						    </div> 
					    </div >
				    </div> 
			    </div>  
		
		  <div className="app-card shadow-sm mb-4 border-left-decoration">
				    <div className="inner">
					    <div className="app-card-body p-4">
						    <div className="row gx-5 gy-3">
						        <div className="col-12 col-lg-9">
								<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
							    </div> 
 
						    </div> 
	
					    </div> 
					    
				    </div> 
			    </div>
		  </div>
    </>
  )
};