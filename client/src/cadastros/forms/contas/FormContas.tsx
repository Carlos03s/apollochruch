import React, { useState } from 'react'
import ButtonEnviar from '../components/ButtonEnviar'
import InputForm from '../components/InputForm'
import {SmallInputContaiiner} from '../Container/FormIndexContainer'
import { api } from '../../../utils/api'

export default function FormContas() {

    const [tipo, setTipo] = useState<string>('')
    const [valor, setValorAproximado] = useState<string>('')
    const [data_pagamento, setData_Pagamento] = useState<string>('')
    const [observacao, setObservacao] = useState<string>('')

    const handleEnviar = () => { 
      api('insert-contas', {
              method: 'POST',
              data: {
                  tipo,
                  valor,
                  data_pagamento,
                  observacao
              },
      }).then(result => {
        console.log(result);
      }).catch(error => {
              console.log(error);
              
          });
    };
    
    

  return (
    <>
    <SmallInputContaiiner>

    <InputForm
    placeholder='Informe o tipo de conta'
    name='tipo'
    changedText={(e) => setTipo(e.target.value)}
    valor={tipo}
    type='text'
    />
    <InputForm
    placeholder='Informe o valor aproximado'
    name='valor'
    changedText={(e) => setValorAproximado(e.target.value)}
    valor={valor}
    type='number'
    />

    <InputForm
    placeholder='Informe a data do pagamento'
    name='data_pagamento'
    changedText={(e) => setData_Pagamento(e.target.value)}
    valor={data_pagamento}
    type='date'
    />

    <InputForm
    placeholder='Observações (opcional'
    name='observacao'
    changedText={(e) => setObservacao(e.target.value)}
    valor={observacao}
    type='text'
    />
    </SmallInputContaiiner>

    <ButtonEnviar click={handleEnviar}/>
    </>
  )
}
