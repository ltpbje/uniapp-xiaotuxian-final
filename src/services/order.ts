import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderPreResult,
  OrderResult,
  OrderSkuItem,
} from '@/types/order'
import { http } from '@/utils/http'

/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  // 下单时已经选择好的地址id
  addressId?: string
}) => {
  return http<OrderPreResult>({
    url: '/member/order/pre/now',
    method: 'GET',
    data,
  })
}

// 会员中心-订单管理
// 提交订单
// POST
// /member/order
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}

// 会员中心-订单管理
// 获取订单详情
// GET
// /member/order/{id}

export const getMemberOrderByIDAPI = (id: string) => {
  return http<OrderResult>({
    url: `/member/order/${id}`,
    method: 'GET',
  })
}
