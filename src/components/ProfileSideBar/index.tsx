import React from 'react'
import { useUser } from '../../hooks/useUser'
import AlurakutProfileSidebarMenuDefault from '../AlurakutProfileSidebarMenuDefault'
import Box from '../Box'

import { ProfileImage } from './styles'

const ProfileSideBar: React.FC = () => {
  const { gitHubUser } = useUser()
  return (
    <Box as="aside">
      <ProfileImage src={`https://github.com/${gitHubUser}.png`} />
      <hr />
      <p>
        <a href={`https://github.com/${gitHubUser}.png`} className="boxLink">
          @{gitHubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default ProfileSideBar
