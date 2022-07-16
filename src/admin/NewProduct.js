import React, {useState, useContext} from 'react';
import { UserContext } from '../components/userContext';
import { API_URL } from "../apis/endpoint"; 
import { useNavigate } from "react-router-dom" ;
 
export const NewProduct = () => {
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [idTienda, setidTienda] = useState('');
 
  const info = useContext(UserContext);
  setidTienda(info.user.tienda);

  const navigate = useNavigate();

  const handleSubmit = () =>{
    fetch(`${API_URL}/api/productos/${titulo}/${precio}/${imagen}/${descripcion}/${categoria}/${idTienda}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        navigate('/admin/productos', { replace: true });
    }

  return (
    <>
    <div className="container-xl">			    
      <h1 className="app-page-title">Producto Nuevo</h1>
			<hr className="mb-4"/>
      <div className="row g-4 settings-section">
	      <div className="col-12 col-md-4">
		      <h3 className="section-title">Descipcion General</h3>
	        <div className="section-intro">Aqui pudes dar de alta la descripcion general de cada uno de tus productos.</div>
        </div>
        <div className="col-12 col-md-8">
          <div className="app-card app-card-settings shadow-sm p-4">			    
						<div className="app-card-body">
						   <form onSubmit={handleSubmit} className="settings-form">
						    <div className="mb-3">
						     <label htmlFor="setting-input-1" className="form-label">Titulo del Producto</label>
							   <input 
                  type="text" 
                  className="form-control" 
                  id="setting-input-1" 
                  defaultValue="" 
                  required=""
                  onChange={e=>setTitulo(e.target.value)}/>
								</div>
								<div className="mb-3">
							    <label htmlFor="setting-input-2" className="form-label">Precio</label>
							    <input 
                    type="number" 
                    className="form-control" 
                    id="setting-input-2" 
                    defaultValue="" 
                    required=""
                    onChange={e=>setPrecio(e.target.value)}/>
								</div>
						    <div className="mb-3">
								  <label htmlFor="setting-input-3" className="form-label">Categoria</label>
								  <input 
                    type="text" 
                    className="form-control" 
                    id="setting-input-3" 
                    defaultValue=""
                    onChange={e=>setCategoria(e.target.value)}/>
								</div>
                <div className="mb-3">
								  <label htmlFor="setting-input-4" className="form-label">Descripcion del Producto</label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    cols="40" 
                    required
                    onChange={e=>setDescripcion(e.target.value)}/>
								</div>
                <div className="mb-3">
								  <label htmlFor="setting-input-5" className="form-label">Agregar Imagen del Producto</label>
                  <input 
                    type="file" 
                    className="form-control" 
                    id="myFile" 
                    name="filename"
                    onChange={e=>setImagen(e.target.value)}/>
								</div>
								<button type="submit" className="btn btn-primary">Grabar</button>
							 </form>
						  </div>  
						</div>
	        </div>
        </div>
      </div>
    </>
  )
};