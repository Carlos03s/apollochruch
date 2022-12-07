import React, { useEffect, useState } from 'react'
import { AddFormContainer, AddFormInput, AddFormInputsContainer, AddFormSelect, BtnEnviarCaixa } from '../container/AddCaixaContainer'
import { api } from '../../utils/api'
import { RootState } from '../../store/Store';
import { useSelector } from 'react-redux';

interface APITyped {
  tipo: string
}

export default function CaixaSelectConta() {


  const option = useSelector((state: RootState) => state.caixaOption.addCaixaOption);
  const [select, setSelect] = useState<string>('')
  const [selectDefault, setSelectDefault] = useState('Seleciona o tipo de conta')
  const [data, setData] = useState<APITyped[]>([])
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState<number | string>();
  const [sent, setSent] = useState<boolean>(false);

  const click =  (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelect(event.target.value)
  }

  const sendApi = () => {
    api('get-contas', {
        method: 'GET',
    }).then(result => {
      console.log(result.data);
      setData(result.data)
    }).catch(error => {
      console.log(error);
      });
    };

    const handleClick = () => { 
      const numValor = Math.abs(valor as number) * -1
      option == 'Saida' ? setValor(numValor) : valor;
      console.log(numValor);
      
      api('insert-historico-contas', {
          method: 'POST',
          data: {
              tipo: select,
              valor: numValor
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

    useEffect(() => {
      if (sent) {
        setNome('');
        setValor('');
        setSelect('Selecione o tipo de conta');
        setSent(false)
      }
      console.log(valor);
      
    }, [])

  return (
    <>
    <AddFormContainer>

    <AddFormSelect onClick={sendApi} onChange={click}>
        <option value='default' disabled selected> {selectDefault} </option>
        {
          data.map((dat, i) => {
            return (
              <option value={dat.tipo} key={i}> {dat.tipo} </option>
              )
            })
          }
    </AddFormSelect>

        <AddFormInputsContainer>
        <AddFormInput type='text' placeholder='Valor aproximado'
        onChange={(e) => setValor(e.target.value)}
        value={valor}
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
