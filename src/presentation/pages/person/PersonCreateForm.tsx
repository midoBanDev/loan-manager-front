import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PersonAPI } from '@api/person'

interface PersonFormData {
  name: string
  phone: string
  birth: string
  gender: string
  address1: string
  address2: string
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const PersonCreateForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<PersonFormData>({
    name: '',
    phone: '',
    birth: '',
    gender: '',
    address1: '',
    address2: ''
  })

  const [errors, setErrors] = useState<Partial<PersonFormData>>({})
  const [submitError, setSubmitError] = useState<string>('')
  const [submitSuccess, setSubmitSuccess] = useState<string>('')

  const validateForm = () => {
    const newErrors: Partial<PersonFormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요'
    } else if (!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitSuccess('')
    
    if (validateForm()) {
      try {
        const response = await PersonAPI.personCreate(formData)
        const { data } = response as unknown as { data: ApiResponse<number> }
        
        if (data.success) {
          setSubmitSuccess(data.message)
          setTimeout(() => {
            navigate('/persons/list')
          }, 1500)
        } else {
          setSubmitError(data.message || '고객 등록 중 오류가 발생했습니다.')
        }
      } catch (error: any) {
        console.error('Error submitting form:', error)
        if (error.response) {
          const errorResponse = error.response.data as ApiResponse<any>
          setSubmitError(errorResponse.message || '고객 등록 중 오류가 발생했습니다.')
        } else if (error.request) {
          setSubmitError('서버와 통신할 수 없습니다. 네트워크 연결을 확인해주세요.')
        } else {
          setSubmitError('요청 처리 중 오류가 발생했습니다.')
        }
      }
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-4">고객 등록</h1>
      
      {submitError && (
        <div className="mb-6 p-4 text-red-700 bg-red-100 rounded-md">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div className="mb-6 p-4 text-green-700 bg-green-100 rounded-md">
          {submitSuccess}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
              전화번호 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="010-1234-5678"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="birth" className="block text-sm font-semibold text-gray-800 mb-2">
              생년월일 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="birth"
              name="birth"
              value={formData.birth}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              성별 <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-6 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="MALE"
                  checked={formData.gender === 'MALE'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">남성</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="FEMALE"
                  checked={formData.gender === 'FEMALE'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">여성</span>
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address1" className="block text-sm font-semibold text-gray-800 mb-2">
              주소1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address2" className="block text-sm font-semibold text-gray-800 mb-2">
              주소2
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-6 border-t mt-8">
          <button
            type="button"
            onClick={() => navigate('/persons')}
            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            취소
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  )
} 