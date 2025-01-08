import axios from 'axios'

/**
 * axios 인스턴스 생성
 * apiClient 인터셉터는 모든 HTTP 요청이 서버로 전송되기 전에 자동으로 실행되는 미들웨어 같은 역할을 한다.
 */
export const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * 인터셉터 동작 방식
    apiClient를 통해 어떤 HTTP 요청이 발생하면
    그 요청이 서버로 전송되기 전에 interceptors.request.use() 안의 콜백 함수가 자동으로 실행된다.
 * 
 */
apiClient.interceptors.request.use((config: any) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const tokenType = localStorage.getItem('tokenType')
  
  if (accessToken && tokenType) {
    config.headers.Authorization = `${tokenType} ${accessToken}`
  }
  if (refreshToken) {
    config.headers.RefreshToken = refreshToken
  }
  return config
}) 