import { AxiosResponse } from 'axios'
import Api from './api'

export type GitHubApiProps = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export const getFollowers = async (): Promise<
  AxiosResponse<GitHubApiProps[]>
> => {
  const response = await Api.get('/followers')
  return response
}

export const getFollowing = async (): Promise<
  AxiosResponse<GitHubApiProps[]>
> => {
  const response = await Api.get('/following')
  return response
}
