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

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}
