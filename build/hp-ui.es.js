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
var ButtonPlugin = {
  install(app) {
    app.component(Button.name, Button)
  }
}
const treeProps = {
  data: {
    type: Object,
    required: true
  }
}
var Tree = defineComponent({
  name: 'HTree',
  props: treeProps,
  setup(props) {
    const { data: innerData } = toRefs(props)
    return () => {
      return createVNode(
        'div',
        {
          class: 's-tree'
        },
        [innerData.value.map(treeNode => treeNode.label)]
      )
    }
  }
})
var TreePlugin = {
  install(app) {
    app.component(Tree.name, Tree)
  }
}
const installs = [ButtonPlugin, TreePlugin]
var entry = {
  install(app) {
    installs.forEach(p => app.use(p))
  }
}
export { Button, Tree, entry as default }
