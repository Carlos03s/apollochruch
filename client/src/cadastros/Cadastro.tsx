import React, { useState } from 'react';
import {
  NavContainer,
  CadastroContainer,
  ToggleContainer
} from './container/CadastroContainer';
import {SmallInputContaiiner} from './forms/Container/FormIndexContainer'
import FormdDoacoes from './forms/doacoes/FormDoacoes'
import FormColaboradores from './forms/colaboradores/FormColaborades'
import FormContas from './forms/contas/FormContas'

export default function Cadastro() {

  const [left, setLeft] = useState<boolean>();
  const [middle, setMiddle] = useState<boolean>();
  const [right, setRight] = useState<boolean>(true);


  const clickLeft = () => {
    setRight(false);
    setMiddle(false);
    setLeft(true)
  }

  const clickMiddle = () => {
    setRight(false);
    setMiddle(true);
    setLeft(false)
  }
  const clickRight = () => {
    setRight(true);
    setMiddle(false);
    setLeft(false)
  }


    return (
      <NavContainer>
        <CadastroContainer>
          <span id='title'>o que voce ira  <span id='title-colored'>cadastrar</span>?</span>

          <ToggleContainer>
            <div id="left" className={left ? 'active' : 'not-active'} onClick={clickLeft}>
              <span id={left ? 'txt-active' : 'txt-not-active'}>Doadores</span>
            </div>

            <div id="middle" className={middle ? 'active' : 'not-active'} onClick={clickMiddle}>
              <span id={middle ? 'txt-active' : 'txt-not-active'}>colaboradores</span>
            </div>

            <div id="right" className={right ? 'active' : 'not-active'} onClick={clickRight}>
              <span id={right ? 'txt-active' : 'txt-not-active'}>contas</span>
            </div>

          </ToggleContainer>

            {left &&  <FormdDoacoes/>}       
            {middle && <FormColaboradores/>}
            {right && <FormContas/>}

        </CadastroContainer>
      </NavContainer>
    )
  }
