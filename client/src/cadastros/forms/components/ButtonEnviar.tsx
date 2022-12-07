import React from 'react'
import ButtonEnviarContainer from './container/ButtonEnviarContainer'

interface Proped {
    click: () => void
}

export default function ButtonEnviar({ click }: Proped) {
  return (
    <ButtonEnviarContainer
    onClick={click}
    >
        <span>Cadastrar</span>
    </ButtonEnviarContainer>
  )
}
