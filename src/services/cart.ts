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

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data,
  })
}

// 购物车
// 修改购物车单品
// PUT
// /member/cart/{skuId}
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    url: `/member/cart/${skuId}`,
    data,
    method: 'PUT',
  })
}

// 购物车全选/取消全选
export const putmemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    url: '/member/cart/selected',
    method: 'PUT',
    data,
  })
}
