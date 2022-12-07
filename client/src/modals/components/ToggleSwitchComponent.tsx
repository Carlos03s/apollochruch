import React, { useEffect, useState } from 'react'
import { ToggleSwitch } from '../container/AddCaixaContainer'
import { RootState } from '../../store/Store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCaixa } from '../../store/SliceAddCaixa'


export default function ToggleSwitchComponent() {

    const dispatch = useDispatch()
    const toggleOption = useSelector((state: RootState) => state.caixaOption.addCaixaOption);
    const [toggleOpt, setToggleOpt] = useState('')


  const selectEntrada = () => {
    dispatch(addCaixa('entrada'))
    console.log('entrada');
    
  }

  const selectSaida = () => {
    dispatch(addCaixa('saida'))
    console.log('saida');
  }

  useEffect(() => {
    setToggleOpt(toggleOption)
  }, [toggleOption])


  return (
    <>
                 <ToggleSwitch>
                        <div id="left" onClick={selectEntrada}
                        className={toggleOption === 'entrada' ? 'active' : 'not-active'}
                        >
                            <span>Entrada</span>
                        </div>

                        <div id="right" onClick={selectSaida}
                        className={toggleOption === 'saida' ? 'active' : 'not-active'}
                        >
                            <span>saida</span>
                        </div>

                    </ToggleSwitch>
    </>
  )
}
