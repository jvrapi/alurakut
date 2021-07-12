import React from 'react'

import { Container } from './styles'

const ProfileRelationsBox: React.FC = () => {
  const favoritePersons = [
    'rafaballerini',
    'juunegreiros',
    'omariosouto',
    'peas',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <Container>
      <h2 className="smallTitle">
        Pessoas da comunidade ({favoritePersons.length})
      </h2>
      <ul>
        {favoritePersons.map(favorite => (
          <li key={favorite}>
            <a href={`/users/${favorite}`}>
              <img src={`https://github.com/${favorite}.png`} />
              <span>{favorite}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ProfileRelationsBox
