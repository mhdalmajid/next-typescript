import { put } from '@core/api/RestClient'
import { LoginModel, LoginInfoModel, UserCreateModel } from 'types/models'
import { useAxios } from '../hooks/useAxios/useAxios'

export const useSignup = (data: UserCreateModel | {}) => {
  return useAxios({ method: put, url: 'users/signup', data })
}
