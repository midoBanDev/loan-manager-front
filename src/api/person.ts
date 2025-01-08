import { apiClient } from './client'

export interface PersonCreateRequest {
    name: string
    phone: string
    birth: string
    gender: string
    address1: string
    address2: string
}

export interface PersonModifyRequest {
    name: string
    phone: string
    birth: string
    gender: string
    address1: string
    address2: string
}

export const PersonAPI = {

    // 사용자 생성
    personCreate: (data: PersonCreateRequest) =>
        apiClient.post<PersonCreateRequest>('/api/person/create', data),

    
    // 사용자 수정
    personModify: (data: PersonModifyRequest) =>
        apiClient.post<PersonModifyRequest>('/api/person/modify', data),

} 