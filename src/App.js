import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './paginas/Layout';
import { Home} from './paginas/Home';
import { Login } from './paginas/Login';
import { Signup} from './paginas/Signup';
import { Reset } from './paginas/Reset-password';
import { Error } from './paginas/Error';
import { Exito } from './paginas/exito';
import { Test } from './paginas/test';
import { Mensaje } from './paginas/mensaje';
import { Shop } from './paginas/Shop';
import { About } from './paginas/About';
import { Politicas } from './paginas/Politicas';
import { Docu } from './paginas/Docu';

import {AdminLayout} from './admin/AdminLayout';
import {Tablero} from './admin/Tablero';
import {Productos} from './admin/Productos';
import {NoPage} from './admin/NoPage';
import { Perfil } from './admin/Perfil';
import { Ajustes } from './admin/Ajustes';
import { Terminos } from './paginas/Terminos';
import { Vacantes } from './paginas/Vacantes';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="terminos" element={<Terminos/>} />
            <Route path="exito" element={<Exito/>} />
            <Route path="politicas" element={<Politicas/>} />
            <Route path="vacantes" element={<Vacantes/>} />
            <Route path="*" element={<Error />} />
            <Route path="test" element={<Test/>} />
          </Route>  

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset" element={<Reset />} />
          <Route path="shop/:id" element={<Shop/>}/>
          <Route path="mensaje/:id" element={<Mensaje/>} />
          <Route path="documentation" element={<Docu/>} />
        
          <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Tablero />} />
              <Route path="tablero" element={<Tablero />} />
              <Route path="productos" element={<Productos />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="ajustes" element={<Ajustes/>} />
              <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;