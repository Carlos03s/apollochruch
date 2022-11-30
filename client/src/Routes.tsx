import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './cadastros/Cadastro';

export default function Rotas() {
  return (
    <>
      <Routes>
      
       <Route  path='/main_window' element={<Cadastro/>}/>

      </Routes>
    </>
  );
}
