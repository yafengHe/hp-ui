/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 13:30:15
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:25:16
 * @Description: 主文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

import HpUI from './index'

createApp(App).use(HpUI).mount('#app')
