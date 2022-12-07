import React, { useState } from 'react'
import InputForm from '../components/InputForm'
import {SmallInputContaiiner} from '../Container/FormIndexContainer'
import ButtonEnviar from '../components/ButtonEnviar'
import { api } from '../../../utils/api'

export default function FormDoacoes() {

    const [nome, setNome] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')

      const handleEnviar = () => { 
		api('insert-doacao', {
            method: 'POST',
            data: {
                nome,
                cpf,
                email,
                telefone
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
    placeholder='Informe o nome'
    name='nome'
    changedText={(e) => setNome(e.target.value)}
    valor={nome}
    type='text'
    />

    <InputForm
    placeholder='Informe o CPF'
    name='dataPagamento'
    changedText={(e) => setCpf(e.target.value)}
    valor={cpf}
    type='number'
    
    />
    <InputForm
    placeholder='Informe o email'
    name='email'
    changedText={(e) => setEmail(e.target.value)}
    valor={email}
    type='text'
    />

<InputForm
    placeholder='Informe o telefone'
    name='telefone'
    changedText={(e) => setTelefone(e.target.value)}
    valor={telefone}
    type='number'
    />
 
    </SmallInputContaiiner>
    
    <ButtonEnviar click={handleEnviar}/>
    </>
  )
}
