import React from 'react'
import { InputFormContainer } from './container/InputFormContainer'

interface Proped {
  placeholder: string,
  name: string
  changedText: (e: React.ChangeEvent<HTMLInputElement>) => void,
  valor: string,
  type: string
}

export default function InputContainers({placeholder, name, changedText, valor, type}: Proped) {


  return (
    <>
    <InputFormContainer>
      <input type={type} name={name} id="" placeholder={placeholder} 
      onChange={changedText} value={valor}
      />
    </InputFormContainer>

    </>
  )
}
