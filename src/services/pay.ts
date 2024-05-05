// 支付
// 获取微信支付参数
// GET /pay/wxPay/miniPay

import { http } from '@/utils/http'

// /pay/wxPay/miniPay
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/wxPay/miniPay',
    method: 'GET',
    data,
  })
}

// 支付
// 模拟支付-内测版
// GET
// /pay/mock
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    url: '/pay/mock',
    method: 'GET',
    data,
  })
}
