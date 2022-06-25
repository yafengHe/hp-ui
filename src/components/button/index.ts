/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 16:04:10
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-25 16:10:50
 * @Description: 按钮
 */
import { App } from 'vue'
import Button from './src/button'

export { Button }

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
