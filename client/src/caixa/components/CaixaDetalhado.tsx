import React, { useState } from 'react'
import CaixaDetalhadoData from './CaixaDetalhadoData'

export default function CaixaDetalhado(  ) {

  const [filter, setFilter] = useState<string>('day')

  const handleSelectChange =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
}

  return (
    <>
            <div className="table_container detailed_table">
        <div className="head">
            <p>Caixa detalhado</p>
            <select name="test" id="test" onChange={handleSelectChange}>
              <option value="day"> Últimos 1 dias</option>
              <option value="week" selected>
                Últimos 7 dias
              </option>
              <option value="month"> Últimos 30 dias</option>
            </select>
          </div>
          <div id="scroll-data">
            <div id="data-container">

          <table>
            <CaixaDetalhadoData day={filter} />

          </table>
            </div>
          </div>
        </div>
    </>
  )
}
