import * as React from 'react';
import {HeaderContainer} from './Container/HeaderContainer'


export default function HeaderContent() {
  return (
    <HeaderContainer>
      <section className="navbar">
        <div className="navbar_content">
          <a href="" className="nav_logo">
            <img src={require("../../assets/img/logo.png")} alt="Mercury System"></img>
          </a>
          <div className="nav_links">
            <a href="" className="selected">Caixas</a>
            <a href="">Histórico</a>
            <a href="">Cadastros</a>
            
          </div>
        </div>
      </section>
    </HeaderContainer>
  );
}
