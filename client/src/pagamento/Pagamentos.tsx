import React, { useEffect, useState } from "react";
import { MainContainer } from "../caixa/container/CaixaContent";
import AddCaixa from '../modals/AddCaixa'
import { handleAddCaixaModal } from '../store/SliceAddCaixa'
import { RootState } from '../store/Store';
import { useSelector, useDispatch } from 'react-redux';
import Contas from './components/Contas'
import DoacoesData from './components/DoacoesData'


export default function Pagamentos() {

  const option = useSelector((state: RootState) => state.caixaOption.caixaModalOpen);
  const [open, setOpen] = useState('')
  const dispatch = useDispatch()

  const [input, setInput] = useState('');
  const words = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
  

  useEffect(() => {
    setOpen(option)
  }, [option, open])

  return (
    <> 
        <MainContainer>
      <div className="tables2">
        <div className="table_container2 summary_wallet_table2">
          <div className="head">
            <p>Historico de doacoes</p>
            <select name="test" id="test">
              <option value="day"> Últimos 1 dias</option>
              <option value="week" selected>
                Últimos 7 dias
              </option>
              <option value="month"> Últimos 30 dias</option>
            </select>
          </div>
          <div id="scroll-data2">


          <table>
            <DoacoesData/>
          </table>
          </div>

        </div>
      <Contas/>


      </div>
    </MainContainer>

    

    { open == 'true' && <AddCaixa/> }


    </>
  );
}
