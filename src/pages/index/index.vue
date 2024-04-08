<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import type { BannerItem } from '@/types/home'
// 获取轮播图数据
const bannelList = ref<BannerItem[]>([])
const getHomeBannelData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannelList.value = res.result
}
onLoad(() => {
  getHomeBannelData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <XtxSwiper :list="bannelList"></XtxSwiper>
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
