import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config: any) => {
  const accessToken = localStorage.getItem('accessToken')
  const tokenType = localStorage.getItem('tokenType')
  
  if (accessToken && tokenType) {
    config.headers.Authorization = `${tokenType} ${accessToken}`
  }
  return config
}) 