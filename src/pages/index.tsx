import React from 'react'
import MainGrid from '../components/MainGrid'
import ProfileArea from '../components/ProfileArea'
import WelcomeArea from '../components/WelcomeArea'
import ProfileRelationsArea from '../components/ProfileRelations'
import { AlurakutMenu } from '../lib/AluraKutCommons'
import { useUser } from '../hooks/useUser'
const Home: React.FC = () => {
  const { gitHubUser } = useUser()

  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <ProfileArea />

        <WelcomeArea />

        <ProfileRelationsArea />
      </MainGrid>
    </>
  )
}

export default Home
