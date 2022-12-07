import React, { useState } from 'react'
import ButtonEnviar from '../components/ButtonEnviar'
import InputForm from '../components/InputForm'
import {BiggerInputContainer} from '../Container/FormIndexContainer'
import { api } from '../../../utils/api'

export default function FormColaborades() {

    const [nome, setNome] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [endereco, setEndereco] = useState<string>('')
    const [funcao, setFuncao] = useState<string>('')

    const handleEnviar = () => { 
      api('insert-colaborador', {
              method: 'POST',
              data: {
                nome,
                  cpf,
                  email,
                  telefone,
                  endereco,
                  funcao
              },
      }).then(result => {
        console.log(result);
      }).catch(error => {
        console.log(error);
              
          });
    };

  return (
    <>
    <BiggerInputContainer>
    <InputForm
    placeholder='Informe o nome'
    name='nome'
    changedText={(e) => setNome(e.target.value)}
    valor={nome}
    type='text'
    />

    <InputForm
    placeholder='Informe o CPF'
    name='cpf'
    changedText={(e) => setCpf(e.target.value)}
    valor={cpf}
    type='number'
    />

    <InputForm
    placeholder='Informe o Email'
    name='email'
    changedText={(e) => setEmail(e.target.value)}
    valor={email}
    type='text'

    />

    <InputForm
    placeholder='Informe seu telefone'
    name='telefone'
    changedText={(e) => setTelefone(e.target.value)}
    valor={telefone}
    type='tel'
    />

    <InputForm
    placeholder='Informe o endereco'
    name='endereco'
    changedText={(e) => setEndereco(e.target.value)}
    valor={endereco}
    type='text'
    />

    <InputForm
    placeholder='Informe a função'
    name='funcao'
    changedText={(e) => setFuncao(e.target.value)}
    valor={funcao}
    type='text'

    />

    </BiggerInputContainer>

    <ButtonEnviar click={handleEnviar}/>
    </>
  )
}
