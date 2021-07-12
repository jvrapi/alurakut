import React from 'react'

import Box from '../Box'
import OrkutNostalgicIconSet from '../OrkutNostalgicIconSet'

import { Container } from './styles'

const WelcomeArea: React.FC = () => {
  return (
    <Container>
      <Box>
        <h1 className="title">Bem vindo(a)</h1>
        <OrkutNostalgicIconSet />
      </Box>
    </Container>
  )
}

export default WelcomeArea
