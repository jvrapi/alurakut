import React from 'react'

import Box from '../Box'
import CreateCommunityForm from '../CreateCommunityForm'
import OrkutNostalgicIconSet from '../OrkutNostalgicIconSet'

import { Container } from './styles'

const WelcomeArea: React.FC = () => {
  return (
    <Container>
      <Box>
        <h1 className="title">Bem vindo(a)</h1>
        <OrkutNostalgicIconSet />
      </Box>
      <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>
        <CreateCommunityForm />
      </Box>
    </Container>
  )
}

export default WelcomeArea
