import React, { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/portal.css';
import { Link } from "react-router-dom";
import { encriptar } from "../apis/encriptar";
 
export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const password = encriptar(pass);
  console.log(password);

  const handleInput = async () =>{
    const res = await fetch('https://app-itj-bootcamp.herokuapp.com/usuario?n='+name+'&e='+email+'&p='+password, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
  });
  const data = await res.json();
  return console.log(data); 
  }

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
					<h2 className="auth-heading text-center mb-5">Sign up to Portal</h2>
			        <div className="auth-form-container text-start">
						<form className="auth-form login-form">  
            <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="Nombre" 
                  required
                  onChange={e=>setName(e.target.value)}/>
                <label htmlFor="floatingInput">Nombre</label>
              </div> 
              <div className="form-floating mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="nombre@ejemplo.com" 
                  required
                  onChange={e=>setEmail(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
              </div>    
              <div className="form-floating mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="contraseña" 
                  required
                  onChange={e=>setPass(e.target.value)}/>
                <label htmlFor="floatingInput">Password</label>
              </div>    
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingInput" placeholder="Confirmar Contraseña" required/>
                <label htmlFor="floatingInput">Confirm Password</label>
              </div>   
							<div className="form-floating mb-3">
		        	<div className="extra mt-3 row justify-content-between">
                <div className="form-check">
                  <small className="text-muted">
									<input className="form-check-input" type="checkbox" value="" id="RememberPassword" required/>
									<label className="form-check-label" htmlFor="RememberPassword">
									I agree to Portal's <a href="#a" className="app-link">Terms of Service</a> and <a href="#a" className="app-link">Privacy Policy</a>.
									</label>
                  </small>
								</div>
			
								</div>
							</div>
							<div className="text-center">
								<button 
                  type="submit" 
                  className="w-100 btn btn-lg btn-outline-secondary"
                  onClick={()=> handleInput()}
                >
                  Sign Up
                </button>
							</div>
						</form>
						
						<div className="auth-option text-center pt-5">
              <small className="text-muted">Already have an account? -    
                <Link to="/login" className="text-link">Log in</Link>.
              </small>
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