;(function (t, e) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? e(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], e)
    : ((t = typeof globalThis != 'undefined' ? globalThis : t || self),
      e((t['hp-ui'] = {}), t.Vue))
})(this, function (t, e) {
  'use strict'
  const u = {
    type: { type: String, default: 'secondary' },
    size: { type: String, default: 'mediun' },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  }
  var a = e.defineComponent({
      name: 'HButton',
      props: u,
      setup(n, { slots: o }) {
        const { type: l, size: c, disabled: b, block: m } = e.toRefs(n),
          y = m.value ? 's-btn--block' : ''
        return () => {
          const v = o.default ? o.default() : '\u6309\u94AE'
          return e.createVNode(
            'button',
            {
              disabled: b.value,
              class: `s-btn s-btn--${l.value} s-btn--${c.value} ${y}`
            },
            [v]
          )
        }
      }
    }),
    r = {
      install(n) {
        n.component(a.name, a)
      }
    }
  const d = { data: { type: Object, required: !0 } }
  var s = e.defineComponent({
      name: 'HTree',
      props: d,
      setup(n) {
        const { data: o } = e.toRefs(n)
        return () =>
          e.createVNode('div', { class: 's-tree' }, [o.value.map(l => l.label)])
      }
    }),
    i = {
      install(n) {
        n.component(s.name, s)
      }
    }
  const f = [r, i]
  var p = {
    install(n) {
      f.forEach(o => n.use(o))
    }
  }
  ;(t.Button = a),
    (t.Tree = s),
    (t.default = p),
    Object.defineProperties(t, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
