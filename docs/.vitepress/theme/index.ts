/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 15:15:21
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:25:57
 * @Description: file content
 */
import Theme from 'vitepress/theme'
import './demo-block.scss'
import { registerComponents } from './register-components'
import HpUI from '../../../src/index'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }) {
    // 注册组件
    registerComponents(app)
    app.use(HpUI)
  }
}
