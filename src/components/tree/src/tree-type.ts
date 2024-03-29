/*
 * @Author: Heyafeng
 * @Date: 2022-06-26 11:10:14
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-26 12:54:21
 * @Description: file content
 */
import { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {
  data: {
    type: Object as PropType<Array<IInnerTreeNode>>,
    required: true
  }
} as const

interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

interface IInnerTreeNode extends ITreeNode {
  parentId?: string // 父节点ID
  level: number // 节点层级
  isLeaf?: boolean // 是否叶子结点
}

export type TreeProps = ExtractPropTypes<typeof treeProps>
