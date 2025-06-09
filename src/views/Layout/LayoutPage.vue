<template>
  <div>
    <HeaderNav />
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue';
</script>