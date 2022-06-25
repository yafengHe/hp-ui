/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 13:30:15
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-25 14:28:14
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})]
})
