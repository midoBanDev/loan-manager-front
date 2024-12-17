import { apiClient } from './client'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  tokenType: string
  accessTokenExpiresIn: number
  refreshTokenExpiresIn: number
}

export const AuthAPI = {

  getAccessToken: () => localStorage.getItem('accessToken'),
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  getTokenType: () => localStorage.getItem('tokenType'),
  getAccessTokenExpiresIn: () => localStorage.getItem('accessTokenExpiresIn'),
  getRefreshTokenExpiresIn: () => localStorage.getItem('refreshTokenExpiresIn'),

  // 일반 로그인
  login: (data: LoginRequest) => 
    apiClient.post<LoginResponse>('/api/v1/auth/login', data),
    
  // 구글 소셜 로그인
  googleLogin: (idToken: string) => 
    apiClient.post<LoginResponse>('/api/v1/auth/social/google', {
      idToken: idToken
    }, {
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    }),

  // 로그아웃
  googleLogout: () => 
    apiClient.post<LoginResponse>('/api/v1/auth/logout', null, {
      headers: {
        'Authorization': `Bearer ${AuthAPI.getAccessToken()}`,
        'RefreshToken': `${AuthAPI.getRefreshToken()}`
      }
    })  

} 