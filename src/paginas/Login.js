import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/portal.css';
import { Link } from "react-router-dom";
 
export const Login = () => {
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
					<h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
			        <div className="auth-form-container text-start">
						<form className="auth-form login-form">  
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div> 
              <br/>     
							<div className="password mb-3">
								<label className="sr-only" htmlFor="signin-password">Password</label>
								<input id="signin-password" name="signin-password" type="password" className="form-control signin-password" placeholder="Password" required="required"/>
								<div className="extra mt-3 row justify-content-between">
									<div className="col-6">
										<div className="form-check"> <small className="text-muted">
											<input className="form-check-input" type="checkbox" value="" id="RememberPassword"/>
											<label className="form-check-label" htmlFor="RememberPassword">
                       Remember me
											</label></small>
										</div>
									</div>
									<div className="col-6">
										<div className="forgot-password text-end">
											 <small className="text-muted">
                       <Link to="/reset" className="text-link">Forgot password?</Link>
                       </small> 
										</div>
									</div>
								</div>
							</div>
							<div className="text-center">
								<button type="submit" className="w-100 btn btn-lg btn-outline-secondary">Log In</button>
							</div>
						</form>
						
						<div className="auth-option text-center pt-5">
              <small className="text-muted">No Account? Sign up -    
                <Link to="/signup" className="text-link">here</Link>.
              </small>
            </div>
					</div>

			    </div>
		  
		    </div>
	    </div>
    </div>
        </>
      )
    };