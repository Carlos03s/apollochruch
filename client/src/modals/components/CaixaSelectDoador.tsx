import React, { useEffect, useState } from 'react'
import { api } from '../../utils/api'
import { AddFormInput, AddFormInputsContainer, AddFormSelect, BtnEnviarCaixa, AddFormContainer } from '../container/AddCaixaContainer'
import { RootState } from '../../store/Store';
import { useSelector } from 'react-redux';

interface APITyped {
    nome: string
}


export default function CaixaSelectDoador() {
    

    const option = useSelector((state: RootState) => state.caixaOption.addCaixaOption);
    const [nome, setNome] = useState<string>('');
    const [data, setData] = useState<APITyped[]>([])
    const [sent, setSent] = useState<boolean>(false);
    const [valor, setValor] = useState<number | string>();

    const handleSelectChange =  (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNome(event.target.value)
    }

    const sendApi = () => {
        api('get-doador-nome', {
            method: 'GET',
        }).then(result => {
          console.log(result.data);
          setData(result.data)
        }).catch(error => {
          console.log(error);   
            });
        }
        
        const handleClick = () => { 
            const numValor = Math.abs(valor as number) * -1
            option === 'Saida' ? setValor(numValor) : valor;
            api('insert-historico', {
                method: 'POST',
                data: {
                    nome,
                    valor
                }
            }).then(result => {
              console.log(result.data);
              console.log('foii');
              
            }).catch(error => {
              console.log(error);
              console.log(valor);
              
                    
                });
        setSent(true)
      }

  return (
    <>
    <AddFormContainer>

    <AddFormSelect
    onClick={sendApi}
    onChange={handleSelectChange}>

        <option value="day" disabled selected
        
        > Selecione o doador </option>
        {
            data.map(dat => {
                return (
                    <option value={dat.nome} > {dat.nome} </option>
                    )
                })
            }
    </AddFormSelect>

    <AddFormInputsContainer>
        <AddFormInput type='text' placeholder='valor aproximado'
        onChange={(e) => setValor(e.target.value)}
        />
        </AddFormInputsContainer>
        </AddFormContainer>

     <BtnEnviarCaixa
        onClick={handleClick}
        >
          Salvar
        </BtnEnviarCaixa>
            </>
  )
}
