import { defineComponent, toRefs, createVNode } from 'vue'
const buttonProps = {
  type: {
    type: String,
    default: 'secondary'
  },
  size: {
    type: String,
    default: 'mediun'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
}
var Button = defineComponent({
  name: 'HButton',
  props: buttonProps,
  setup(props, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockCls = block.value ? 's-btn--block' : ''
    return () => {
      const defaultSlot = slots.default ? slots.default() : '\u6309\u94AE'
      return createVNode(
        'button',
        {
          disabled: disabled.value,
          class: `s-btn s-btn--${type.value} s-btn--${size.value} ${blockCls}`
        },
        [defaultSlot]
      )
    }
  }
})
var index = {
  install(app) {
    app.component(Button.name, Button)
  }
}
export { Button, index as default }
