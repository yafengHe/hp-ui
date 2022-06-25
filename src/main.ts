/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 13:30:15
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-25 16:08:04
 * @Description: 主文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

import Button from './components/button'

createApp(App).use(Button).mount('#app')
