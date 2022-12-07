import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api'
import { getLast7days, getToday, getLast30days } from '../../utils/dates'

interface DataTyped {
  contas: number,
  doacao: number,
  total: number,
  data: string
}

export default function CaixaRetrato() {

  // get-doacoes-resumido
  const [doacao, setDoacao] = useState<number>()
  const [doacaoData, setDoacaoData] = useState<string>()

  const [contas, setContas] = useState<number>()
  const [contasData, setContasData] = useState<string>()

  const [total, setTotal] = useState<number>()
  const [filter, setFilter] = useState<string>('day')

  const handleSelectChange =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
}


  useEffect(() => {
    api('sum-contas-doacao', {
        method: 'GET',
    }).then(result => {
      setContas(result.data.contas.valor)
      setContasData(result.data.contas.data)
      setDoacao(result.data.doacao.valor)
      setDoacaoData(result.data.doacao.data)
      setTotal(result.data.total)
      
    }).catch(error => {
      console.log(error);
      });
      console.log(doacaoData);
      
}, [contas, doacao])

  return (
    <>
            <div className="table_container extract_table">
        {/* <div className="head">
            <p>Extrato</p>
            <select name="test" id="test" onChange={handleSelectChange} >
              <option value="day"> Últimos 1 dias</option>
              <option value="week" selected>
                Últimos 7 dias
              </option>
              <option value="month"> Últimos 30 dias</option>
            </select>
          </div> */}
          <table>
            {/* ----- EXAMPLE TABLE DATA ----- */}
              <tr>
                <td>
                  <p>Total</p>
                </td>
                <td>
                  <div>
                    { filter == 'day' && 
                    <>
                    {getToday(doacaoData) && <p>R$ {doacao} </p> }
                    </>
                    }
                    { filter == 'week' && 
                    <>
                    {getLast7days(doacaoData) && <p>R$ {doacao} </p> }
                    </>
                    }
                    { filter == 'month' && 
                    <>
                    {getLast30days(doacaoData) && <p>R$ {doacao} </p> }
                    </>
                    }
                    <img src={require("../../assets/icons/arrow-small-up.png")}></img>
                  </div>
                </td>
                <td>
                  <div>
                    <p>R$ {contas} </p>
                    <img src={require("../../assets/icons/arrow-small-down.png")}></img>
                  </div>
                </td>
                
              </tr>
             <span id='total'>R$ {total} </span>
          </table>
        </div>
    </>
  )
}
