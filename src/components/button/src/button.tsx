/*
 * @Author: Heyafeng
 * @Date: 2022-06-25 16:04:17
 * @LastEditors: Heyafeng
 * @LastEditTime: 2022-06-25 23:30:21
 * @Description: 按钮组件
 */
import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'HButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockCls = block.value ? 's-btn--block' : ''
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
