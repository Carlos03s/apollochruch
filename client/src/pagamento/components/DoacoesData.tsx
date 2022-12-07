import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api'
import { InputContainer } from '../../caixa/container/CaixaContent'

interface DataTyped {
    data: string,
    valor: number,
    nome: string
}

export default function DoacoesData() {

    const [data, setData] = useState<DataTyped[]>([])
    const [input, setInput] = useState('');
    const words = ['apple', 'banana', 'orange', 'grape', 'strawberry'];

    useEffect(() => {
        api('get-doacoes-resumido', {
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
    <InputContainer>
    <img src={require('../../assets/img/search.png')} alt="" />
      <input type="text" value={input} onChange={(event => setInput(event.target.value))} 
      placeholder='Faça uma pesquisa...'
      />
    </InputContainer>
        {data
          .filter((dat) => dat.nome.includes(input))
          .map((data) => (
            <>
                    <tr>
                    <td>
                      <p>{data.nome}</p>
                    </td>
                    <td>
                      <p id='data'> {data.data} </p>
                    </td>
                    <td>
                      <p>R$ {data.valor}</p>
                    </td>
                    <td>
                      <img src={require("../../assets/icons/arrow-small-up.png")}></img>
                    </td>
                   </tr>
            </>
          ))}
    </>
  )
}
