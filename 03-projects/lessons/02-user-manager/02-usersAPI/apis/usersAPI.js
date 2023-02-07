import apiClient from '../utils/apiClient'

const urlFragment = 'users'

export async function getUser() {
  const response = await apiClient.get(urlFragment)
  return response.data
}
