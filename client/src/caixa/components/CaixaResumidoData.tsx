import React, { useEffect, useState } from 'react'
import { MainContainer } from "../container/CaixaContent";
import { api } from '../../utils/api'
import { getLast7days, getToday, getLast30days } from '../../utils/dates'

interface DataTyped {
  data: string,
  valor: number,
  categoria: string,
  tipo: string,
  nomeDoador: string,
  valorDoacao: number,
  dataDoacao: string
}

interface Proped {
  day: string
}

export default function CaixaResumidoData( {day}: Proped ) {

    // get-doacoes-resumido

    const [data, setData] = useState<DataTyped[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string>()

    useEffect(() => {
        api('get-doacao-conta', {
            method: 'GET',
        }).then(result => {
          console.log(result.data);
          setData(result.data)
          
        }).catch(error => {
          console.log(error);
          });
          console.log(day);
          setSelectedFilter(day)
          
    }, [day, data])


  return (
    <>

{
            selectedFilter == 'day' &&
            <>
              {
                data.map(dat => {
                    return (
                      <>
                      {getToday(dat.data, dat.dataDoacao) &&
                          <tr>
                          <td>
                            <p>{dat.categoria == 'conta' ? 'conta' : 'Doação' }</p>
                          </td>
                          <td>
                            <p id='data2'>{ dat.categoria == 'conta' ? dat.data : dat.dataDoacao }</p>
                          </td>
                          <td>
                            <p>R$ {dat.categoria == 'conta' ? dat.valor : dat.valorDoacao }</p>
                          </td>
                          <td>
                            <img src={dat.categoria == 'conta' ? require("../../assets/icons/arrow-small-down.png")  : require("../../assets/icons/arrow-small-up.png")}></img>
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
                data.map((dat, i) => {
                    return (
                      <>
                      {getLast7days(dat.data, dat.dataDoacao) && 
                          <tr >
                          <td key={i}>
                            <p >{dat.categoria == 'doacao' ? 'Doação' : 'Conta' }</p>
                          </td>
                          <td key={i}>
                            <p id='data2'>{ dat.categoria == 'doacao' ? dat.dataDoacao : dat.data }</p>
                          </td>
                          <td key={i}>
                            <p>R$ {dat.categoria == 'doacao' ? dat.valorDoacao : dat.valor}</p>
                          </td>
                          <td key={i}>
                            <img src={dat.categoria == 'doacao' ? require("../../assets/icons/arrow-small-up.png")
                          : require("../../assets/icons/arrow-small-down.png")  
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
                data.map(dat => {
                    return (
                      <>
                      {getLast30days(dat.data, dat.dataDoacao) && 
                          <tr>
                          <td>
                            <p>{dat.categoria == 'doacao' ? 'Doação' : 'Conta' }</p>
                          </td>
                          <td>
                            <p id='data2'>{ dat.categoria == 'doacao' ? dat.dataDoacao : dat.data }</p>
                          </td>
                          <td>
                            <p>R$ {dat.categoria == 'doacao' ? dat.valorDoacao : dat.valor}</p>
                          </td>
                          <td>
                            <img src={dat.categoria == 'doacao' ? require("../../assets/icons/arrow-small-up.png")
                          : require("../../assets/icons/arrow-small-down.png")  
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
