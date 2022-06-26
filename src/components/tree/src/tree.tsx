/*
 * @Author: Heyafeng
 * @Date: 2022-06-26 11:10:14
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 13:14:32
 * @Description: file content
 */

import { defineComponent, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-type'

export default defineComponent({
  name: 'HTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data: innerData } = toRefs(props)
    return () => {
      return (
        <div class="s-tree">
          {innerData.value.map(treeNode => treeNode.label)}
        </div>
      )
    }
  }
})
