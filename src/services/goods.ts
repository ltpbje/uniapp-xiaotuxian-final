import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'
/**
 * 商品详情
 * 商品详情
 *  GET
 * /goods
 * @returns
 */
export const getHomeByIdAPI = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: { id },
  })
}
