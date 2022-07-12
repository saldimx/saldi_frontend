import React, {useContext} from 'react';
import { useProfile } from '../api_rest/useProfile';
import { UserContext } from '../components/userContext';
 
export const Perfil = () => {
	const user = useContext(UserContext);
	const email = user.user.email;
	const {data:dataUser, isLoading:isLoadingUser} = useProfile(email);


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
			            <h1 className="app-page-title mb-0">Mi Cuenta</h1>
				    </div>
				    <div className="col-auto">
					     <div className="page-utilities">
						    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
							    <div className="col-auto">						    
								    <a className="btn app-btn-secondary" href="/">
								 
									</a>
							    </div>
						    </div> 
					    </div >
				    </div> 
			    </div>  
		
				<div className="row gy-4">
	                <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
						    <div className="app-card-header p-3 border-bottom-0">
						        <div className="row align-items-center gx-3">
							        <div className="col-auto">
								        <div className="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
</svg>
									    </div>
						                
							        </div>
							        <div className="col-auto">
								        <h4 className="app-card-title">Profile</h4>
							        </div>
						        </div>
						    </div>

						    <div className="app-card-body px-4 w-100">
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label mb-2"><strong>Photo</strong></div>
										    <div className="item-data">
												<img className="profile-image" src="assets/images/user.png" alt=""/>
												</div>
									    </div>
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div>
								    </div>
							    </div>
								{dataUser.map((item, i) => {     
								return(        
									<><div className="item border-bottom py-3">
										<div className="row justify-content-between align-items-center">
											<div className="col-auto">
												<div className="item-label"><strong>Name</strong></div>
												<div className="item-data">{item.name} {item.lastname}</div>
											</div>
											<div className="col text-end">
												<a className="btn-sm app-btn-secondary" href="/">Change</a>
											</div>
										</div>
									</div><div className="item border-bottom py-3">
											<div className="row justify-content-between align-items-center">
												<div className="col-auto">
													<div className="item-label"><strong>Email</strong></div>
													<div className="item-data">{item.email}</div>
												</div>{item.infoTienda.nom_tienda}
												<div className="col text-end">
													<a className="btn-sm app-btn-secondary" href="/">Change</a>
												</div>
											</div>
										</div>
										{item.infoTienda.map((tienda, x) => {
										return(
											<div className="item border-bottom py-3">
											<div className="row justify-content-between align-items-center">
												<div className="col-auto">
													<div className="item-label"><strong>Website</strong></div>
													<div className="item-data">
														<a href={`https://saldi.mx/shop/${tienda.nom_tienda}`}  target="_blank" rel="noopener noreferrer">
															https://saldi.mx/shop/{tienda.nom_tienda}
														</a>
													</div>
												</div>
												<div className="col text-end">
													<a className="btn-sm app-btn-secondary" href="/">Change</a>
												</div>
											</div>
										</div>
											);
										})}
										</>

							)
							})}
	


							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Location</strong></div>
									        <div className="item-data">
										        New York
									        </div>
									    </div>
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div>
								    </div>
							    </div>
						    </div>
						    <div className="app-card-footer p-4 mt-auto">
							   <a className="btn app-btn-secondary" href="/">Manage Profile</a>
						    </div>
						   
						</div>
	                </div>
	                <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
						    <div className="app-card-header p-3 border-bottom-0">
						        <div className="row align-items-center gx-3">
							        <div className="col-auto">
								        <div className="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sliders" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"></path>
</svg>
									    </div>
						                
							        </div>
							        <div className="col-auto">
								        <h4 className="app-card-title">Preferences</h4>
							        </div>
						        </div>
						    </div>
						    <div className="app-card-body px-4 w-100">
							    
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Language </strong></div>
									        <div className="item-data">English</div>
									    </div>
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div>
								    </div>
							    </div>
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Time Zone</strong></div>
									        <div className="item-data">Central Standard Time (UTC-6)</div>
									    </div>
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div>
								    </div>
							    </div>
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Currency</strong></div>
									        <div className="item-data">$(US Dollars)</div>
									    </div>
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div>
								    </div>
							    </div>
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Email Subscription</strong></div>
									        <div className="item-data">Off</div>
									    </div> 
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div> 
								    </div> 
							    </div> 
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>SMS Notifications</strong></div>
									        <div className="item-data">On</div>
									    </div> 
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div>
								    </div>
							    </div> 
						    </div> 
						    <div className="app-card-footer p-4 mt-auto">
							   <a className="btn app-btn-secondary" href="/">Manage Preferences</a>
						    </div> 
						   
						</div> 
	                </div> 
	                <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
						    <div className="app-card-header p-3 border-bottom-0">
						        <div className="row align-items-center gx-3">
							        <div className="col-auto">
								        <div className="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-shield-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"></path>
  <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
</svg>
									    </div>
						                
							        </div> 
							        <div className="col-auto">
								        <h4 className="app-card-title">Security</h4>
							        </div> 
						        </div> 
						    </div> 
						    <div className="app-card-body px-4 w-100">
							    
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Password</strong></div>
									        <div className="item-data">••••••••</div>
									    </div> 
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Change</a>
									    </div> 
								    </div> 
							    </div> 
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><strong>Two-Factor Authentication</strong></div>
									        <div className="item-data">You haven't set up two-factor authentication. </div>
									    </div> 
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Set up</a>
									    </div> 
								    </div> 
							    </div> 
						    </div> 
						    
						    <div className="app-card-footer p-4 mt-auto">
							   <a className="btn app-btn-secondary" href="/">Manage Security</a>
						    </div> 
						   
						</div> 
	                </div>
	                <div className="col-12 col-lg-6">
		                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
						    <div className="app-card-header p-3 border-bottom-0">
						        <div className="row align-items-center gx-3">
							        <div className="col-auto">
								        <div className="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-credit-card" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"></path>
  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"></path>
</svg>
									    </div> 
						                
							        </div> 
							        <div className="col-auto">
								        <h4 className="app-card-title">Payment methods</h4>
							        </div> 
						        </div> 
						    </div> 
						    <div className="app-card-body px-4 w-100">
							    
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><svg className="svg-inline--fa fa-cc-visa fa-w-18 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="cc-visa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"></path></svg><strong>Credit/Debit Card </strong></div>
									        <div className="item-data">1234*******5678</div>
									    </div> 
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Edit</a>
									    </div> 
								    </div> 
							    </div> 
							    <div className="item border-bottom py-3">
								    <div className="row justify-content-between align-items-center">
									    <div className="col-auto">
										    <div className="item-label"><svg className="svg-inline--fa fa-paypal fa-w-12 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg><strong>PayPal</strong></div>
									        <div className="item-data">Not connected</div>
									    </div> 
									    <div className="col text-end">
										    <a className="btn-sm app-btn-secondary" href="/">Connect</a>
									    </div> 
								    </div> 
							    </div> 
						    </div> 
						    <div className="app-card-footer p-4 mt-auto">
							   <a className="btn app-btn-secondary" href="/">Manage Payment</a>
						    </div> 
						   
						</div> 
	                </div>
                </div>
		  </div>
		  <br/>
    </>
  )
};