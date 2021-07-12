import React from 'react'
import { useUser } from '../../hooks/useUser'
import Box from '../Box'

import { ProfileImage } from './styles'

const ProfileSideBar: React.FC = () => {
  const { gitHubUser } = useUser()
  return (
    <Box>
      <ProfileImage src={`https://github.com/${gitHubUser}.png`} />
    </Box>
  )
}

export default ProfileSideBar
