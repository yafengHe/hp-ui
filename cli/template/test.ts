/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 11:40:04
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 11:02:59
 * @Description: 测试文件模板
 */
import { upperFirst } from './utils'

export default function genTestTemplate(name) {
  return `\
import { render } from '@testing-library/vue'
import ${upperFirst(name)} from '../../src/${name}'

describe('${name} test', () => {
  test('${name} init render', async () => {
    const { getByRole } = render(${upperFirst(name)})
    getByRole('${name}')
  })
})
`
}
