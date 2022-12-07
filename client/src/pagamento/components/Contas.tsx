import React from 'react'
import ContasData from './ContasData'

export default function Contas() {
  return (
    <div className="table_container2 detailed_table">
    <div className="head">
        <p>Historico pagamentos</p>
        <select name="test" id="test">
          <option value="day"> Últimos 1 dias</option>
          <option value="week" selected>
            Últimos 7 dias
          </option>
          <option value="month"> Últimos 30 dias</option>
        </select>
      </div>
      <div id="scroll-data2">
        <div id="data-container">

      <table>
        <ContasData/>
        <ContasData/>
        <ContasData/>
        <ContasData/>
        <ContasData/>
        <ContasData/>
        <ContasData/>
      </table>

        </div>
      </div>
    </div>
    )
}
