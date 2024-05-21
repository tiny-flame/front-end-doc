<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-09 18:19:19
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-10 00:30:30
 * @FilePath: \vitepress\src\client\theme-default\components\VPDocAsideCarbonAds.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->
<script setup lang="ts">
// import { defineAsyncComponent } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'

defineProps<{
  carbonAds: DefaultTheme.CarbonAdsOptions
}>()

// const VPCarbonAds = __CARBON__
//   ? defineAsyncComponent(() => import('./VPCarbonAds.vue'))
//   : () => null
</script>

<template>
  <div class="VPDocAsideCarbonAds">
    <!-- <VPCarbonAds :carbon-ads="carbonAds" /> -->
  </div>
</template>
