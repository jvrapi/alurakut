import { useContext } from 'react'
import {
  CommunityContext,
  CommunityContextProps
} from '../context/communityContext'

export const useCommunity = (): CommunityContextProps => {
  const value = useContext(CommunityContext)
  return value
}
