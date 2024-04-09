<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
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

// 页面加载
onLoad(() => {
  getHomeBannelData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannelList"></XtxSwiper>
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList"></CategoryPanel>
  <!-- 热门推荐 -->
  <HotPanel :list="hotList"></HotPanel>
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
