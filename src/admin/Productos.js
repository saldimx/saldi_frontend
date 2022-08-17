import React, {useContext} from 'react';
import { UserContext } from '../components/userContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useProducts } from '../api_rest/useProducts';


const plus = <FontAwesomeIcon icon={faPlus} /> 
const elimina = <FontAwesomeIcon icon={faTrash} /> 

 
export const Productos = () => {
  const info = useContext(UserContext);
  const idTienda = info.user.tienda;
  console.log(idTienda);
 
  const {data:dataProduct, isLoading:isLoadingProducts} = useProducts(idTienda);
 
  
  
  if(isLoadingProducts ){
    return (
      <div>Loading!!!</div>
    );
  }
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
					    <a className="btn app-btn-secondary" href="/admin/new-product">
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
                  <th scope="col">Titulo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Descipcion</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Actualizar</th>
                  <th scope="col">Eliminar</th>
                </tr>
               </thead>
              <tbody>
              {dataProduct.map((item, i) => {     
                return(        
                      <>
                <tr key={i}>
                  <td>{item.titulo}</td>
                  <td>{item.precio}</td>
                  <td>{item.categoria}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.imgagen}</td>
                  <td>
                    <input type="button" value="Actualizar"   />
                  </td>
                  <td>
                    <input type="button" className="btn btn-danger"   /><i className={elimina}></i>
                  </td>
                </tr>
                </>
                      )
                    })}
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