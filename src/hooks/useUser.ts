import { useContext } from 'react'
import { UserContext, UserContextProps } from '../context/userContext'

export const useUser = (): UserContextProps => {
  const value = useContext(UserContext)
  return value
}
