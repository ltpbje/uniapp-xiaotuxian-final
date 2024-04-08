<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
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
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannelList"></XtxSwiper>
  <!-- 分类面板 -->
  <CategoryPanel></CategoryPanel>
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
