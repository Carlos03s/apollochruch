import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './cadastros/Cadastro';
import Cadastrados from './Cadastrados/Cadastrados';
import Caixa from './caixa/Caixa';
import Pagamentos from './pagamento/Pagamentos';

export default function Rotas() {
  return (
    <>
      <Routes>
      
       <Route  path='/main_window' element={<Cadastro/>}/>
       <Route  path='/Cadastrados' element={<Cadastrados/>}/>
       <Route  path='/Caixa' element={<Caixa/>}/>
       <Route  path='/Pagamentos' element={<Pagamentos/>}/>

      </Routes>
    </>
  );
}
