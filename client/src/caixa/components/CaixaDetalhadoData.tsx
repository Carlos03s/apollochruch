import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api'
import { getLast7days, getToday, getLast30days } from '../../utils/dates'

interface DataTyped {
  data: string,
  valor: number,
  categoria: string
  tipo: string,
  nomeDoador: string
  valorDoacao: string
  dataDoacao: string
}

interface Proped {
  day: string
}


export default function CaixaDetalhadoData({ day }: Proped ) {

  const [data, setData] = useState<DataTyped[]>([])
  const [selectedFilter, setSelectedFilter] = useState<string>()


  useEffect(() => {
    api('get-doacao-conta-detalhado', {
        method: 'GET',
    }).then(result => {
      console.log(result.data);
      setData(result.data)
    }).catch(error => {
      console.log(error);
      });
      setSelectedFilter(day)

}, [day, data])

  return (
    <>

    {
      selectedFilter == 'day' &&
      <>
          {
      data.map(data => {
        return (
          <>
          {
            getToday(data.data, data.dataDoacao) &&
            <tr>
            <td>
              <p>{data.tipo ? data.tipo : data.categoria}</p>
            </td>
            <td>
              <p>{data.tipo ? data.categoria : data.nomeDoador} </p>
            </td>
            <td>
              <p>{data.tipo ? `R$ ${data.valor}` : `R$ ${data.valorDoacao}`}</p>
            </td>
            <td>
              <p> { data.tipo ? data.data : data.dataDoacao} </p>
            </td>
            <td>
              <img src={data.categoria == 'doacao' ? require("../../assets/icons/arrow-small-up.png") :
            require("../../assets/icons/arrow-small-down.png")
          }></img>
            </td>
          </tr>
          }

        </>
        )
      })
    }
      </> 
    }

{
      selectedFilter == 'week' &&
      <>
          {
      data.map(data => {
        return (
          <>
          {
            getLast7days(data.data, data.dataDoacao) &&
            <tr>
            <td>
              <p>{data.tipo ? data.tipo : data.categoria}</p>
            </td>
            <td>
              <p>{data.tipo ? data.categoria : data.nomeDoador} </p>
            </td>
            <td>
              <p>{data.tipo ? `R$ ${data.valor}` : `R$ ${data.valorDoacao}`}</p>
            </td>
            <td>
              <p> { data.tipo ? data.data : data.dataDoacao} </p>
            </td>
            <td>
              <img src={data.categoria == 'doacao' ? require("../../assets/icons/arrow-small-up.png") :
            require("../../assets/icons/arrow-small-down.png")
          }></img>
            </td>
          </tr>
          }

        </>
        )
      })
    }
      </> 
    }


{
      selectedFilter == 'month' &&
      <>
          {
      data.map(data => {
        return (
          <>
          {
            getLast30days(data.data, data.dataDoacao) &&
            <tr>
            <td>
              <p>{data.tipo ? data.tipo : data.categoria}</p>
            </td>
            <td>
              <p>{data.tipo ? data.categoria : data.nomeDoador} </p>
            </td>
            <td>
              <p>{data.tipo ? `R$ ${data.valor}` : `R$ ${data.valorDoacao}`}</p>
            </td>
            <td>
              <p> { data.tipo ? data.data : data.dataDoacao} </p>
            </td>
            <td>
              <img src={data.categoria == 'doacao' ? require("../../assets/icons/arrow-small-up.png") :
            require("../../assets/icons/arrow-small-down.png")
          }></img>
            </td>
          </tr>
          }

        </>
        )
      })
    }
      </> 
    }


    </>
  )
}
