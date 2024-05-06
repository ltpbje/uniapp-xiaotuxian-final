import type {
  OrderCreateParams,
  OrderCreateResult,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
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

// 会员中心 - 订单管理
// 填写订单 - 获取再次购买订单
// GET / member / order / repurchase / { id }
export const getMemberOrderRepurchaseByIDAPI = (id: string) => {
  return http<OrderPreResult>({
    url: `/member/order/repurchase/${id}`,
    method: 'GET',
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}
/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}

/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param id 订单id
 * @param data cancelReason 取消理由
 */
export const getMemberOrderCancelByIdAPI = (id: string, data: { cancelReason: string }) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data,
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}
