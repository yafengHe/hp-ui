/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 15:15:21
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-25 15:39:07
 * @Description: 主题配置文件
 */
import Theme from 'vitepress/theme'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import HelloWorld from '../../../src/components/HelloWorld.vue'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('HelloWorld', HelloWorld)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
