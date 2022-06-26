/*
 * @Author: Heyafeng
 * @Date: 2022-06-26 13:22:33
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:23:11
 * @Description: file content
 */
import type { App, Plugin } from 'vue'
import * as components from './components'
import version from './version'

const SheepUI = {
  version,
  install(app: App) {
    Object.keys(components).forEach(key => {
      app.use(components[key as keyof typeof components] as Plugin)
    })
  }
}

export default SheepUI
