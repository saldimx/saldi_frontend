import React, {useContext} from 'react';
import { UserContext } from '../components/userContext';
import { useTablero } from '../api_rest/useTablero'; 

export const Tablero = () => {
	const info = useContext(UserContext);
	const email = info.user.email;
	const {data:dataUser, isLoading:isLoadingUser} = useTablero(email);
	console.log(dataUser);
	if(isLoadingUser){
		return (
		  <div>Loading!!!</div>
		);
	}
	
	return (
    <>
        <div className="container-xl">
		  <div className="row g-3 mb-4 align-items-center justify-content-between">
			   <div className="col-auto">
			    	<h1 className="app-page-title mb-0">Tablero</h1>
				</div>
				<div className="col-auto">
				    <div className="page-utilities">
					    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
						    <div className="col-auto">						    
							    <a className="btn app-btn-secondary" href="/">s</a>
							</div>
						</div> 
					</div>
				</div> 
			</div>  
			<div className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration" role="alert">
			    <div className="inner">
				    <div className="app-card-body p-3 p-lg-4">
					    <h3 className="mb-3">Welcome, {info.user.name}!</h3>
					    <div className="row gx-5 gy-3">
					        <div className="col-12 col-lg-9">        
							    <div>Portal is a free Bootstrap 5 admin dashboard template. The design is simple, clean and modular so it's a great base for building any modern web app.</div>
							</div>
							<div className="col-12 col-lg-3">
							    <a 
									className="btn app-btn-primary" 
									href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
										<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-arrow-down me-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  											<path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
  											<path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"></path>
  											<path fillRule="evenodd" d="M8 6a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 10.293V6.5A.5.5 0 0 1 8 6z"></path>
										</svg>Free Download
								</a>
							</div> 
						</div> 
						<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>     
				</div> 
			</div>
		  <div className="app-card shadow-sm mb-4 border-left-decoration">
				    <div className="inner">
					    <div className="app-card-body p-4">
						    <div className="row gx-5 gy-3">
						        <div className="col-12 col-lg-9">
							
							    </div> 
						    </div> 
					    </div> 
				    </div> 
			    </div>


				<div className="row g-4 mb-4">
				    <div className="col-6 col-lg-3">
					    <div className="app-card app-card-stat shadow-sm h-100">
						    <div className="app-card-body p-3 p-lg-4">
							    <h4 className="stats-type mb-1">Total Sales</h4>
							    <div className="stats-figure">$12,628</div>
							    <div className="stats-meta text-success">
								    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"></path>
</svg> 20%</div>
						    </div>
					    </div>
				    </div>
				    
				    <div className="col-6 col-lg-3">
					    <div className="app-card app-card-stat shadow-sm h-100">
						    <div className="app-card-body p-3 p-lg-4">
							    <h4 className="stats-type mb-1">Expenses</h4>
							    <div className="stats-figure">$2,250</div>
							    <div className="stats-meta text-success">
								    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path>
</svg> 5% </div>
						    </div>
					    </div>
				    </div>
				    <div className="col-6 col-lg-3">
					    <div className="app-card app-card-stat shadow-sm h-100">
						    <div className="app-card-body p-3 p-lg-4">
							    <h4 className="stats-type mb-1">Projects</h4>
							    <div className="stats-figure">23</div>
							    <div className="stats-meta">
								    Open</div>
						    </div>
					    </div>
				    </div>
				    <div className="col-6 col-lg-3">
					    <div className="app-card app-card-stat shadow-sm h-100">
						    <div className="app-card-body p-3 p-lg-4">
							    <h4 className="stats-type mb-1">Invoices</h4>
							    <div className="stats-figure">6</div>
							    <div className="stats-meta">New</div>
						    </div>
					    </div>
				    </div>
			    </div>

		  </div>
    </>
  )
};