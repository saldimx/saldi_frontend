import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
 
export const Reset = () => {
    return (
        <>
<div className="row g-0 app-auth-wrapper">
	    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div className="d-flex flex-column align-content-end">
			    <div className="app-auth-body mx-auto">	
				    <div className="app-auth-branding mb-4">
              <a className="app-logo" href="index.html">
                <img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo"/>
              </a>
            </div>
					<h2 className="auth-heading text-center mb-4">Password Reset</h2>

					<div className="auth-intro mb-4 text-center">Enter your email to create a new password.</div>
	
					<div className="auth-form-container text-left">
						
						<form className="auth-form resetpass-form">                
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>   
							<div className="text-center">
								<button type="submit" className="w-100 btn btn-lg btn-outline-secondary">Reset Password</button>
							</div>
						</form>
						
						<div className="auth-option text-center pt-5">
              <Link to="/login" className="app-link">Log in</Link>
              <span className="px-2">|</span> 
              <Link to="/signup" className="app-link">Sign up</Link>
            </div>
					</div>


			    </div>
		    
		    </div> 
	    </div> 
	    <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div className="auth-background-holder">
		    </div>
		    <div className="auth-background-mask"></div>
		    <div className="auth-background-overlay p-3 p-lg-5">
			    <div className="d-flex flex-column align-content-end h-100">
				    <div className="h-100"></div>
 
				</div>
		    </div> 
	    </div> 
    
    </div>

     
        </>
      )
    };