import { defineComponent, toRefs, createVNode } from 'vue'
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
var index = {
  install(app) {
    app.component(Tree.name, Tree)
  }
}
export { Tree, index as default }
