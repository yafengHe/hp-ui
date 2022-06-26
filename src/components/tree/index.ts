/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 16:04:10
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:13:41
 * @Description: 按钮
 */
import { App } from 'vue'
import Tree from './src/tree'

export { Tree }

export default {
  install(app: App) {
    app.component(Tree.name, Tree)
  }
}
