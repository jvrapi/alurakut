import React, { createContext, ReactNode, useEffect, useState } from 'react'

export type UserContextProps = {
  gitHubUser: string
}

type UserContextProviderProps = {
  children: ReactNode
}
export const UserContext = createContext({} as UserContextProps)

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children
}) => {
  const [gitHubUser, setGitHubUser] = useState('')

  useEffect(() => {
    setGitHubUser('jvrapi')
  }, [])

  return (
    <UserContext.Provider value={{ gitHubUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
