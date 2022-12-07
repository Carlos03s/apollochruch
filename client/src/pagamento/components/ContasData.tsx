import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api'

interface DataTyped {
    data: string,
    valor: number,
    tipo: string,
    categoria: string
}

export default function ContasData() {

    const [data, setData] = useState<DataTyped[]>([])

    useEffect(() => {
        api('get-contas-resumido', {
            method: 'GET',
        }).then(result => {
          console.log(result.data);
          setData(result.data)
        }).catch(error => {
          console.log(error);
          });
    }, [data])

  return (
    <>
    {
        data.map(data => {
            return (
                <tr>
                <td>
                  <p> { data.tipo } </p>
                </td>
                <td>
                  <p id='valor'> R$ {data.valor} </p>
                </td>
                <td>
                  <p> {data.data}</p>
                </td>
                <td>
                <img src={data.categoria == 'doacao' ? require("../../assets/icons/arrow-small-up.png") :
          require("../../assets/icons/arrow-small-down.png")
          }></img>
                </td>
              </tr>
            )
        })
    }
    </>
  )
}
