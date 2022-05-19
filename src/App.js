import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './paginas/Layout';
import { Home} from './paginas/Home';
import { Login } from './paginas/Login';
import { Signup} from './paginas/Signup';
import { Reset } from './paginas/Reset-password';
import { Error } from './paginas/Error';
import { Exito } from './paginas/exito';
import { Test } from './paginas/test';
import { Admin } from './admin/admin';
import { Mensaje } from './paginas/mensaje';
import { Shop } from './paginas/Shop';
import { About } from './paginas/About';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="exito" element={<Exito/>} />
            <Route path="*" element={<Error />} />
            <Route path="test" element={<Test/>} />
          </Route>  
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset" element={<Reset />} />
          <Route path="shop/:id" element={<Shop/>}/>
          <Route path="admin" element={<Admin/>} />
          <Route path="mensaje/:id" element={<Mensaje/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;