import React, { useEffect, useState } from "react";
import { MainContainer } from "./container/CaixaContent";
import CaixaResumidoData from './components/CaixaResumidoData'
import CaixaExtrato from './components/CaixaExtrato'
import CaixaDetalhado from './components/CaixaDetalhado'
import AddCaixa from '../modals/AddCaixa'
import { handleAddCaixaModal } from '../store/SliceAddCaixa'
import { RootState } from '../store/Store';
import { useSelector, useDispatch } from 'react-redux';


export default function CadastradosCaixa() {

  const option = useSelector((state: RootState) => state.caixaOption.caixaModalOpen);
  const [open, setOpen] = useState('')
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<string>('day')

  const handleSelectChange =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
}

  const handleClick = () => {
    dispatch(handleAddCaixaModal('true'))  }

  useEffect(() => {
    setOpen(option)
  }, [option, open])

  return (
    <> 
        <MainContainer>
      <div className="tables">
        <div className="table_container summary_wallet_table">
          <div className="head">
            <p>Caixa resumido</p>
            <select name="test" id="test"
            onChange={handleSelectChange}
            >
              <option value="day" selected> Últimos 1 dias</option>
              <option value="week">
                Últimos 7 dias
              </option>
              <option value="month"> Últimos 30 dias</option>
            </select>
          </div>
          <div id="scroll-data">

          <table>
            <CaixaResumidoData
            day={filter}
            />
          </table>
          </div>

          <button className="add_button" id="add_wallet_change"
          onClick={handleClick}
          > <span>+</span> Adicionar novo caixa</button>
        </div>
        
      <CaixaDetalhado
      />

      <CaixaExtrato/>

      </div>
    </MainContainer>

    

    { open == 'true' && <AddCaixa/> }


    </>
  );
}
