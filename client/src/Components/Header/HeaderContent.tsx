import * as React from 'react';
import {HeaderContainer} from './Container/HeaderContainer'
import { NavLink, useLocation } from 'react-router-dom';

export default function HeaderContent() {

  const location = useLocation();


    return (
      <HeaderContainer>
        <div className='imagem-logo'>
            <img src={require('../../assets/img/logo.png')} alt="" id=''></img>
        </div>  
        
        <div className='navbar'>
          <NavLink to='/Caixa'
          className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
          Caixas
          </NavLink>

          <NavLink to='/Cadastrados'
          className={({ isActive }) => (isActive ? "active" : "not-active")}
          
          >
          Cadastrados
          </NavLink>

          <NavLink to='/Pagamentos'
          className={({ isActive }) => (isActive ? "active" : "not-active")}
          
          >
          Histórico
          </NavLink>

          <NavLink to='/main_window'
          className={({ isActive }) => (isActive ? "active" : "not-active")}
          
          >
          Cadastro
          </NavLink>
        </div>
        
      </HeaderContainer>
    )
  }