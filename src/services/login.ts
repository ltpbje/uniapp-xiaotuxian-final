import { http } from '@/utils/http'
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const postLoginWxMin = (data: LoginParams) => {
  return http({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}
