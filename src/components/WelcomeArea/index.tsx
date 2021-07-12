import React from 'react'
import { OrkutNostalgicIconSet } from '../../lib/AluraKutCommons'
import Box from '../Box'

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
