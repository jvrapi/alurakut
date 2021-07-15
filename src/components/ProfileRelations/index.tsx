import React, { useEffect, useState } from 'react'
import ProfileRelationsBox, {
  ProfileRelationsBoxData
} from '../ProfileRelationsBox'
import { useCommunity } from '../../hooks/useCommunity'
import { Container } from './styles'
import { getFollowing, getFollowers } from '../../services/github'

const favoritePersons = [
  {
    id: Math.random(),
    name: 'rafaballerini',
    link: 'https://github.com/rafaballerini',
    imageURL: 'https://github.com/rafaballerini.png'
  },
  {
    id: Math.random(),
    name: 'juunegreiros',
    link: 'https://github.com/juunegreiros',
    imageURL: 'https://github.com/juunegreiros.png'
  },
  {
    id: Math.random(),
    name: 'omariosouto',
    link: 'https://github.com/omariosouto',
    imageURL: 'https://github.com/omariosouto.png'
  },

  {
    id: Math.random(),
    name: 'peas',
    link: 'https://github.com/peas',
    imageURL: 'https://github.com/peas.png'
  },

  {
    id: Math.random(),
    name: 'marcobrunodev',
    link: 'https://github.com/marcobrunodev',
    imageURL: 'https://github.com/marcobrunodev.png'
  },
  {
    id: Math.random(),
    name: 'felipefialho',
    link: 'https://github.com/felipefialho',
    imageURL: 'https://github.com/felipefialho.png'
  },
  {
    id: Math.random(),
    name: 'diego3g',
    link: 'https://github.com/diego3g',
    imageURL: 'https://github.com/diego3g.png'
  }
]

const ProfileRelations: React.FC = () => {
  const { communities } = useCommunity()
  const [following, setFollowing] = useState<ProfileRelationsBoxData[]>([])
  const [followers, setFollowers] = useState<ProfileRelationsBoxData[]>([])

  const getGitHubFollowing = async () => {
    try {
      const { data } = await getFollowing()

      const dataFormatted = data.map(item => ({
        id: item.id,
        name: item.login,
        link: item.html_url,
        imageURL: item.avatar_url
      }))
      setFollowing(dataFormatted)
    } catch (error) {
      throw new Error(
        'Erro ao tentar recuperar lista das pessoas que você segue no github'
      )
    }
  }

  const getGitHubFollowers = async () => {
    try {
      const { data } = await getFollowers()

      const dataFormatted = data.map(item => ({
        id: item.id,
        name: item.login,
        link: item.html_url,
        imageURL: item.avatar_url
      }))
      setFollowers(dataFormatted)
    } catch (error) {
      throw new Error('Erro ao tentar recuperar lista de seguidores do github')
    }
  }

  useEffect(() => {
    getGitHubFollowers()
    getGitHubFollowing()
  }, [])

  return (
    <Container>
      <ProfileRelationsBox data={communities} title="Comunidades" />
      <ProfileRelationsBox data={following} title="Seguindo" />
      <ProfileRelationsBox data={followers} title="Seguidores" />
    </Container>
  )
}

export default ProfileRelations
