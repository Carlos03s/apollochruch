import * as React from 'react';
import {HeaderContainer} from './Container/HeaderContainer'


export default function HeaderContent() {
    return (
      <HeaderContainer>
        <div className='imagem-logo'>
            <img src={require('../../assets/img/logo.png')} alt="" id=''></img>
        </div>  
        
        <div className='navbar'>
          <span>Caixas</span>
          <span>Histórico</span>
          <span>Cadastros</span>
        </div>
        
      </HeaderContainer>
    )
  }