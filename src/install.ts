/*
 * @Author: Heyafeng
 * @Date: 2022-06-26 11:04:11
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 11:11:18
 * @Description: installComponent
 */
import type { App } from 'vue'
import { HpUIOptions } from './_utils/global-config'

type ComponentType = any
export function installComponent(
  app: App,
  component: ComponentType,
  options?: HpUIOptions
) {
  console.log('installComponent')
}
