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

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset" element={<Reset />} />
            <Route path="exito" element={<Exito/>} />
            <Route path="*" element={<Error />} />
            <Route path="test" element={<Test/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
  );
}

export default App;