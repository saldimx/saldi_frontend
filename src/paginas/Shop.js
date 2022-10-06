import React  from "react";
import { useParams } from "react-router";
//import image  from "../img/circled-s.png"; 
//import logo from "../img/logo.JPG";
import '../css/style.css';
//import { useNavigate } from "react-router-dom"

//import { useTienda } from '../api_rest/useTienda';
import { Mock } from "../components/mock";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faFacebook} from "@fortawesome/free-brands-svg-icons"
//import { faInstagram} from "@fortawesome/free-brands-svg-icons"
//import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
//import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

//const fb = <FontAwesomeIcon icon={faFacebook} />
//const insta = <FontAwesomeIcon icon={faInstagram} /> 
//const link = <FontAwesomeIcon icon={faLinkedin} /> 
//const whats = <FontAwesomeIcon icon={faWhatsapp} /> 


export const Shop = () => {
	//const navigate = useNavigate();
	let {id} = useParams();
	//console.log(id);
	//const {data:dataStore, isLoading:isLoadingStore} = useTienda(id);
	//if(isLoadingStore){
	//	return (
	//	  <div>Loading!!!</div>
	//	)}
	
	//console.log(dataStore);
	if(id==='mock'){
		return (
			<>
			<Mock/>
			</>
		)
	}
}

    