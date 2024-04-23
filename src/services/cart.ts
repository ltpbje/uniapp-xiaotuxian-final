/**
 * 加入购物车
 * @param data 请求体参数
 */
// 购物车
// 加入购物车
// POST
// /member/cart

import { http } from '@/utils/http'

export const postMemberCart = (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}
