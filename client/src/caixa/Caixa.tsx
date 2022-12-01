import * as React from 'react'
import {MainContainer} from './container/CaixaContent'

export default function Caixa() {
  return (
  <MainContainer>
   <div className='tabela1'>
    <h1 className='h1'>Caixa resumido</h1>
      <div className='dropdown'>
        <select name="select" id='a'>
          <option value="valor1">Últimos 1 dias</option>
          <option value="valor2" selected>Últimos 7 dias</option>
          <option value="valor3">Últimos 30 dias</option>
      </select>
      </div>
      <button className='adicionar'>Adicionar novo caixa
</button>
    
  </div> 
   <div className='tabela2'>
    <h2 className='h2'>Caixa detalhado</h2>
    <div className='dropdown'>
        <select name="select" id='b'>
          <option value="valor1">Últimos 1 dias</option>
          <option value="valor2" selected>Últimos 7 dias</option>
          <option value="valor3">Últimos 30 dias</option>
      </select>
      </div>
    
   </div> 
   <div className='extrato'>
    <h3 className='h3'>Extrato</h3>
    <div className='dropdown'>
        <select name="select" id='c'>
          <option value="valor1">Últimos 1 dias</option>
          <option value="valor2" selected>Últimos 7 dias</option>
          <option value="valor3">Últimos 30 dias</option>
      </select>
      </div>
   </div>
  

   
  </MainContainer>
    
  )
}
