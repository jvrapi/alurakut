import React from 'react'
import ProfileRelationsBox from '../ProfileRelationsBox'
import { useCommunity } from '../../hooks/useCommunity'
import { Container } from './styles'

const favoritePersons = [
  {
    id: Math.random().toString(),
    name: 'rafaballerini',
    link: 'https://github.com/rafaballerini',
    image: 'https://github.com/rafaballerini.png'
  },
  {
    id: Math.random().toString(),
    name: 'juunegreiros',
    link: 'https://github.com/juunegreiros',
    image: 'https://github.com/juunegreiros.png'
  },
  {
    id: Math.random().toString(),
    name: 'omariosouto',
    link: 'https://github.com/omariosouto',
    image: 'https://github.com/omariosouto.png'
  },

  {
    id: Math.random().toString(),
    name: 'peas',
    link: 'https://github.com/peas',
    image: 'https://github.com/peas.png'
  },

  {
    id: Math.random().toString(),
    name: 'marcobrunodev',
    link: 'https://github.com/marcobrunodev',
    image: 'https://github.com/marcobrunodev.png'
  },
  {
    id: Math.random().toString(),
    name: 'felipefialho',
    link: 'https://github.com/felipefialho',
    image: 'https://github.com/felipefialho.png'
  },
  {
    id: Math.random().toString(),
    name: 'diego3g',
    link: 'https://github.com/diego3g',
    image: 'https://github.com/diego3g.png'
  }
]

const ProfileRelations: React.FC = () => {
  const { communities } = useCommunity()

  return (
    <Container>
      <ProfileRelationsBox data={favoritePersons} title="Meus Amigos" />
      <ProfileRelationsBox data={communities} title="Comunidades" />
    </Container>
  )
}

export default ProfileRelations
