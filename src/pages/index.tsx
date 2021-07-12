import React from 'react'
import MainGrid from '../components/MainGrid'
import ProfileArea from '../components/ProfileArea'
import WelcomeArea from '../components/WelcomeArea'
import ProfileRelationsArea from '../components/ProfileRelations'
import AlurakutMenu from '../components/AlurakutMenu'

const Home: React.FC = () => {
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <ProfileArea />

        <WelcomeArea />

        <ProfileRelationsArea />
      </MainGrid>
    </>
  )
}

export default Home
