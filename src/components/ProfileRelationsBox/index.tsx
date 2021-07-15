import React from 'react'

import { Container, ShowAll } from './styles'

export type ProfileRelationsBoxData = {
  id: number
  name: string
  imageURL: string
  link?: string
}

type ProfileRelationsBoxProps = {
  data: ProfileRelationsBoxData[]
  title: string
}

const ProfileRelationsBox: React.FC<ProfileRelationsBoxProps> = ({
  data,
  title
}) => {
  return (
    <Container>
      <h2 className="smallTitle">
        {title} ({data.length})
      </h2>
      <ul>
        {data.slice(0, 6).map(item => (
          <li key={item.id}>
            <a href={item.link ? item.link : '/'}>
              <img src={item.imageURL} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {data.length > 6 && (
        <>
          <hr /> <ShowAll href="/"> Ver todos</ShowAll>{' '}
        </>
      )}
    </Container>
  )
}

export default ProfileRelationsBox
