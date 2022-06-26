/*
 * @Author: Heyafeng
 * @Date: 2022-06-26 00:01:45
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 12:47:31
 * @Description: 全量打包的入口文件
 */
import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/components/button'
import TreePlugin, { Tree } from '../src/components/tree'

export { Button, Tree }

const installs = [ButtonPlugin, TreePlugin]

export default {
  install(app: App): void {
    installs.forEach(p => app.use(p))
  }
}
