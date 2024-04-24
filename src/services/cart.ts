/**
 * 加入购物车
 * @param data 请求体参数
 */
// 购物车
// 加入购物车
// POST
// /member/cart

import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

export const postMemberCart = (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}

/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    url: '/member/cart',
    method: 'GET',
  })
}
