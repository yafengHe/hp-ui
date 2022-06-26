<!--
 * @Author: Heyafeng
 * @Date: 2022-06-25 13:30:15
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:14:57
 * @Description: app.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const data = [
  {
    label: 'docs',
    id: 'node-1',
    level: 1
  },
  {
    label: 'packages',
    id: 'node-2',
    expanded: true,
    level: 1
  },
  {
    label: 'vite',
    id: 'node-2-1',
    parentId: 'node-2',
    expanded: true,
    level: 2
  },
  {
    label: 'README.md',
    id: 'node-2-1-1',
    parentId: 'node-2-1',
    isLeaf: true,
    level: 3
  },
  {
    label: 'scripts',
    id: 'node-3',
    level: 1
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'node-4',
    level: 1,
    isLeaf: true
  }
]
</script>

<template>
  <div>
    <HButton type="primary" size="medium" disabled>确定</HButton>
    <HButton type="primary" size="small" block>确定</HButton>
    <HButton type="primary" size="large">确定</HButton>
    <HTree :data="data"></HTree>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
