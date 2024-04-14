<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'
import PageSkeleton from './components/PageSkeleton.vue'
// 获取轮播图数据
const bannelList = ref<BannerItem[]>([])
const getHomeBannelData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannelList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
// 判断是否在加载页面
const isLoading = ref(false)
// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannelData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底
const onScrolltoLower = () => {
  console.log('触底了', guessRef)
  guessRef.value?.getMore()
}
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 重置猜你喜欢数据
  guessRef.value?.resetData()
  // 加载数据
  // await getHomeBannelData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  await Promise.all([
    getHomeBannelData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  // 结束动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>

  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltoLower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannelList"></XtxSwiper>
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
