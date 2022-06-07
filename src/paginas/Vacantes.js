import React  from "react";
import jobs from "../mock/vacantes.json"; 

export const Vacantes = () => {

  return (

<section className="pt-6 pt-md-8">
      <div className="container pb-8 pb-md-11 border-bottom border-gray-300">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <span className="badge rounded-pill bg-primary mb-3">
              <span className="h6 text-uppercase">Applicar</span>
            </span>
            <h2>
              Encuentra las <span className="text-primary">posiciones disponibles</span>.
            </h2>
            <p className="fs-lg text-gray-700 mb-7 mb-md-9">
              Encuentra el trabajo adecuado para ti.
            </p>
          </div>
        </div> 
        <div className="row">
          <div className="col-12">
            <form className="mb-7 mb-md-9">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="form-group mb-5 mb-md-0">
                    <label className="form-label" htmlFor="applyRoles">Roles</label>

               
                    <select className="form-select" id="applyRoles">
                      <option defaultValue="">Roles</option>
                      <option>Deseño</option>
                      <option>Enginieria</option>
                      <option>Producto</option>
                      <option>Testing</option>
                      <option>Finanzas</option>
                    </select>

                  </div>

                </div>
                <div className="col-12 col-md-4">
                  <div className="form-group mb-5 mb-md-0">
                    <label className="form-label" htmlFor="applyTeam">Equipos</label>
                    <select className="form-select" id="applyTeam">
                      <option defaultValue="">Equipos</option>
                      <option>Producto</option>
                      <option>Consultoria</option>
                      <option>Herramientas Internas</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-group mb-0">
                    <label className="form-label" htmlFor="applyLocation">Location</label>
                    <select className="form-select" id="applyLocation">
                      <option defaultValue="">Ubicaciones</option>
                      <option>Tijuana</option>
                      <option>Remoto</option>
                    </select>
                  </div>
                </div>
              </div> 
            </form>

          </div>
        </div> 
        <br/>
        <br/>
        <div className="row align-items-center mb-0">
          <div className="col">
            <p className="fs-sm text-muted mb-0">
              Vacantes Disponibles.
            </p>
          </div>
          <div className="col-auto">
            <span className="badge rounded-pill bg-success">
              <span className="h6 text-uppercase">4 Vcacantes</span>
            </span>
          </div>
        </div>  
        <div className="row">
          <div className="col-12">
            <div className="table-responsive mb-7 mb-md-9">
              <table className="table table-align-middle">
                <thead>
                  <tr>
                    <th>
                      <span className="h6 text-uppercase fw-bold">
                        Role
                      </span>
                    </th>
                    <th>
                      <span className="h6 text-uppercase fw-bold">
                        Equipo
                      </span>
                    </th>
                    <th>
                      <span className="h6 text-uppercase fw-bold">
                        Ubicacion
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
              

                {
                jobs.jobs_list.map((value)=>{
                  return(
     
                    <>
                    <tr key={value.vacante}>
                    <td>
                      <a href="career-single.html" className="text-reset text-decoration-none" >
                        <p className="mb-1">
                        {value.role}
                        </p>
                        <p className="fs-sm text-muted mb-0">
                        {value.descripcion}
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" className="text-reset text-decoration-none">
                        <p className="fs-sm mb-0">
                        {value.equipo}
                        </p>
                      </a>

                    </td>
                    <td>

                      <a href="career-single.html" className="text-reset text-decoration-none">
                        <p className="fs-sm mb-0">
                        {value.ubicacion}
                        </p>
                      </a>
                    </td>
                  </tr>
                  </>
                  );
                })
              }

                </tbody>
              </table>
            </div>

          </div>
        </div>  

      </div>  
    </section>
    
      )
    };

    