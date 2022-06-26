;(function (e, t) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((e = typeof globalThis != 'undefined' ? globalThis : e || self),
      t((e.index = {}), e.Vue))
})(this, function (e, t) {
  'use strict'
  const i = { data: { type: Object, required: !0 } }
  var n = t.defineComponent({
      name: 'HTree',
      props: i,
      setup(r) {
        const { data: d } = t.toRefs(r)
        return () =>
          t.createVNode('div', { class: 's-tree' }, [d.value.map(u => u.label)])
      }
    }),
    o = {
      install(r) {
        r.component(n.name, n)
      }
    }
  ;(e.Tree = n),
    (e.default = o),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
