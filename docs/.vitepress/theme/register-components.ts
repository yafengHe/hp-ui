/*
 * @Author: Heyafeng
 * @Date: 2022-06-26 13:20:22
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:20:36
 * @Description: file content
 */
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
