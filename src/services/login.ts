import { http } from '@/utils/http'
/**
 *
 */
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
/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
