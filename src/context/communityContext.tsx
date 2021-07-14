import React, { createContext, ReactNode, useEffect, useState } from 'react'

type Community = {
  id: string
  name: string
  image: string
  link?: string
}

export type CommunityContextProps = {
  communities: Community[]
  updateCommunities(communities: Community): void
}

type CommunityContextProviderProps = {
  children: ReactNode
}

export const CommunityContext = createContext({} as CommunityContextProps)

const CommunityContextProvider: React.FC<CommunityContextProviderProps> = ({
  children
}) => {
  const [communities, setCommunities] = useState<Community[]>([])

  const updateCommunities = (newCommunities: Community) => {
    setCommunities([...communities, newCommunities])
  }

  useEffect(() => {
    updateCommunities({
      id: new Date().toISOString(),
      name: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
      link: 'https://github.com/jvrapi'
    })
  }, [])

  return (
    <CommunityContext.Provider value={{ communities, updateCommunities }}>
      {children}
    </CommunityContext.Provider>
  )
}

export default CommunityContextProvider
