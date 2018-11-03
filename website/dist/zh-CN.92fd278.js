(window.webpackJsonp = window.webpackJsonp || []).push([
  ['zh-CN'],
  {
    '0b4e': function(s, t, a) {
      const l = {
        './alert.md': '7c7a',
        './badge.md': '3aeb',
        './button.md': 'd783',
        './changelog.md': 'cab1',
        './input.md': '2b70',
        './layout.md': 'b536',
        './loading-bar.md': '3275',
        './quick-start.md': '5dad',
        './tabs.md': '6042',
      };
      function r(s) {
        const t = n(s);
        return a(t);
      }
      function n(s) {
        const t = l[s];
        if (!(t + 1)) {
          const a = new Error(`Cannot find module '${s}'`);
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        return t;
      }
      (r.keys = function() {
        return Object.keys(l);
      }),
        (r.resolve = n),
        (s.exports = r),
        (r.id = '0b4e');
    },
    '162d': function(s, t, a) {
      let l = a('85a8');
      typeof l === 'string' && (l = [[s.i, l, '']]), l.locals && (s.exports = l.locals);
      const r = a('499e').default;
      r('18557b6c', l, !0, {});
    },
    '1b52': function(s, t, a) {
      (t = s.exports = a('2350')(!1)),
        t.push([
          s.i,
          '\n.py-button + .py-button {\n  margin-left: 10px;\n}\n.col + .col{\n    margin-top: 10px;\n}\n',
          '',
        ]);
    },
    '2b70': function(s, t, a) {
      a.r(t);
      const l = {
        data() {
          return { input: '' };
        },
      };

      const r = function() {
        const s = this;

        const t = s.$createElement;

        const a = s._self._c || t;
        return a(
          'section',
          [
            s._m(0),
            s._v(' '),
            a('p', [s._v('通过鼠标或键盘输入字符。')]),
            s._v(' '),
            s._m(1),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-input', {
                    attrs: { placeholder: '请输入内容' },
                    model: {
                      value: s.input,
                      callback(t) {
                        s.input = t;
                      },
                      expression: 'input',
                    },
                  }),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('v-model')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"input"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('placeholder')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"请输入内容"')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('>'),
                      ]),
                      s._v('\n\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'javascript' } }, [
                        s._v('\n'),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('export')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('default')]),
                        s._v(' {\n  data() {\n    '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('return')]),
                        s._v(' {\n      '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('input')]),
                        s._v(': '),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v("''")]),
                        s._v(',\n    };\n  },\n};\n'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(2),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-input', {
                    attrs: { disabled: '', placeholder: '请输入内容' },
                    model: {
                      value: s.input1,
                      callback(t) {
                        s.input1 = t;
                      },
                      expression: 'input1',
                    },
                  }),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v('通过 '),
                  a('code', [s._v('disabled')]),
                  s._v(' 属性指定是否禁用 Input 组件'),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('v-model')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"input1"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('placeholder')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"请输入内容"')]),
                        s._v('\n>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('>'),
                      ]),
                      s._v('\n\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'javascript' } }, [
                        s._v('\n'),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('export')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('default')]),
                        s._v(' {\n  data() {\n    '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('return')]),
                        s._v(' {\n      '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('input1')]),
                        s._v(': '),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v("''")]),
                        s._v(',\n    };\n  },\n};\n'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(3),
            s._v(' '),
            s._m(4),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-input', {
                    attrs: { type: 'textarea', rows: 2, placeholder: '请输入内容' },
                    model: {
                      value: s.textarea,
                      callback(t) {
                        s.textarea = t;
                      },
                      expression: 'textarea',
                    },
                  }),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v('文本域高度可通过 '),
                  a('code', [s._v('rows')]),
                  s._v(' 属性控制，'),
                  a('code', [s._v('rows')]),
                  s._v('的默认值为 5。'),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"textarea"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('v-model')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"textarea"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':rows')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"2"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('placeholder')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"请输入内容"')]),
                        s._v('\n>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('>'),
                      ]),
                      s._v('\n\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'javascript' } }, [
                        s._v('\n'),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('export')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('default')]),
                        s._v(' {\n  data() {\n    '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('return')]),
                        s._v(' {\n      '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('textarea')]),
                        s._v(': '),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v("''")]),
                        s._v(',\n    };\n  },\n};\n'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(5),
            s._v(' '),
            s._m(6),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-input', {
                    attrs: { type: 'textarea', rows: 2, placeholder: '请输入内容' },
                    model: {
                      value: s.textarea,
                      callback(t) {
                        s.textarea = t;
                      },
                      expression: 'textarea',
                    },
                  }),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v('文本域高度可通过 '),
                  a('code', [s._v('rows')]),
                  s._v(' 属性控制，'),
                  a('code', [s._v('rows')]),
                  s._v('的默认值为 5。'),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"textarea"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('v-model')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"textarea"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':rows')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"2"')]),
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('placeholder')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"请输入内容"')]),
                        s._v('\n>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-input')]),
                        s._v('>'),
                      ]),
                      s._v('\n\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'javascript' } }, [
                        s._v('\n'),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('export')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('default')]),
                        s._v(' {\n  data() {\n    '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('return')]),
                        s._v(' {\n      '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('textarea')]),
                        s._v(': '),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v("''")]),
                        s._v(',\n    };\n  },\n};\n'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
          ],
          1
        );
      };

      const n = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h2', { attrs: { id: 'input-shu-ru-kuang' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#input-shu-ru-kuang', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Input 输入框'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'ji-chu-yong-fa' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#ji-chu-yong-fa', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 基础用法'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'jin-yong-zhuang-tai' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#jin-yong-zhuang-tai', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 禁用状态'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'wen-ben-yu' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#wen-ben-yu', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 文本域'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('p', [
            s._v('用于输入多行文本信息，通过将 '),
            a('code', { pre: !0 }, [s._v('type')]),
            s._v(' 属性的值指定为 '),
            a('code', { pre: !0 }, [s._v('textarea')]),
            s._v('。'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'wen-ben-yu-2' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#wen-ben-yu-2', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 文本域'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('p', [
            s._v('用于输入多行文本信息，通过将 '),
            a('code', { pre: !0 }, [s._v('type')]),
            s._v(' 属性的值指定为 '),
            a('code', { pre: !0 }, [s._v('textarea')]),
            s._v('。'),
          ]);
        },
      ];

      const v = a('2455');

      const _ = !1;

      const e = null;

      const c = null;

      const i = null;

      const h = Object(v.a)(l, r, n, _, e, c, i);
      t.default = h.exports;
    },
    3275(s, t, a) {
      a.r(t);
      const l = {
        methods: {
          start() {
            this.$loading.start();
          },
          finish() {
            this.$loading.finish();
          },
          error() {
            this.$loading.error();
          },
          update() {
            this.$loading.update(66);
          },
          destory() {
            this.$loading.destory();
          },
        },
      };

      const r = function() {
        const s = this;

        const t = s.$createElement;

        const a = s._self._c || t;
        return a(
          'section',
          [
            s._m(0),
            s._v(' '),
            s._m(1),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  [
                    a('py-button', { attrs: { plain: !0 }, on: { click: s.start } }, [
                      s._v('开始'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { plain: !0 }, on: { click: s.finish } }, [
                      s._v('关闭'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { plain: !0 }, on: { click: s.error } }, [
                      s._v('错误'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { plain: !0 }, on: { click: s.update } }, [
                      s._v('更新进度到66'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { plain: !0 }, on: { click: s.destory } }, [
                      s._v('销毁'),
                    ]),
                  ],
                ],
                2
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [a('p', [s._v('loading')])]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('template')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':plain')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('@click')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"start"')]),
                        s._v('>'),
                      ]),
                      s._v('开始'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':plain')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('@click')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"finish"')]),
                        s._v('>'),
                      ]),
                      s._v('关闭'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':plain')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('@click')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"error"')]),
                        s._v('>'),
                      ]),
                      s._v('错误'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':plain')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('@click')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"update"')]),
                        s._v('>'),
                      ]),
                      s._v('更新进度到66'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':plain')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('@click')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"destory"')]),
                        s._v('>'),
                      ]),
                      s._v('销毁'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('template')]),
                        s._v('>'),
                      ]),
                      s._v('\n\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'javascript' } }, [
                        s._v('\n  '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('export')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('default')]),
                        s._v(' {\n    '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('methods')]),
                        s._v(': {\n      start() {\n        '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('this')]),
                        s._v('.$loading.start();\n      },\n      finish() {\n        '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('this')]),
                        s._v('.$loading.finish();\n      },\n      error() {\n        '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('this')]),
                        s._v('.$loading.error();\n      },\n      update() {\n        '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('this')]),
                        s._v('.$loading.update('),
                        a('span', { attrs: { class: 'hljs-number' } }, [s._v('66')]),
                        s._v(');\n      },\n      destory() {\n        '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('this')]),
                        s._v('.$loading.destory();\n      }\n    }\n  }\n'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
          ],
          1
        );
      };

      const n = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h2', { attrs: { id: 'loadingbar-jia-zai-jin-du-tiao' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#loadingbar-jia-zai-jin-du-tiao', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' loadingBar 加载进度条'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'ji-chu-yong-fa' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#ji-chu-yong-fa', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 基础用法'),
          ]);
        },
      ];

      const v = a('2455');

      const _ = !1;

      const e = null;

      const c = null;

      const i = null;

      const h = Object(v.a)(l, r, n, _, e, c, i);
      t.default = h.exports;
    },
    '3aeb': function(s, t, a) {
      a.r(t);
      const l = function() {
        const s = this;

        const t = s.$createElement;

        const a = s._self._c || t;
        return a(
          'section',
          [
            s._m(0),
            s._v(' '),
            a('p', [s._v('出现在按钮、图标旁的数字或状态标记。')]),
            s._v(' '),
            s._m(1),
            s._v(' '),
            a('p', [s._v('展示新消息数量。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a(
                    'py-badge',
                    { attrs: { value: 120 } },
                    [a('py-button', { attrs: { size: 'small' } }, [s._v('评论')])],
                    1
                  ),
                  s._v(' '),
                  a(
                    'py-badge',
                    { attrs: { value: 3, type: 'success' } },
                    [a('py-button', { attrs: { size: 'small' } }, [s._v('回复')])],
                    1
                  ),
                  s._v(' '),
                  a(
                    'py-badge',
                    { attrs: { value: 120, max: s.eqw } },
                    [a('py-button', { attrs: { size: 'small' } }, [s._v('评论')])],
                    1
                  ),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('定义 value 属性，它接受 Number 或者 String。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':value')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"120"')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"small"')]),
                        s._v('>'),
                      ]),
                      s._v('评论'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':value')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"3"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"small"')]),
                        s._v('>'),
                      ]),
                      s._v('回复'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':value')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"120"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':max')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"eqw"')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"small"')]),
                        s._v('>'),
                      ]),
                      s._v('评论'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(2),
            s._v(' '),
            a('p', [s._v('可以显示数字以外的文本内容。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a(
                    'py-badge',
                    { attrs: { value: 'new' } },
                    [a('py-button', { attrs: { size: 'small' } }, [s._v('评论')])],
                    1
                  ),
                  s._v(' '),
                  a(
                    'py-badge',
                    { attrs: { value: 'hot' } },
                    [a('py-button', { attrs: { size: 'small' } }, [s._v('回复')])],
                    1
                  ),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('定义 value 为 String 类型是时可以用于显示自定义文本。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('value')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"new"')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"small"')]),
                        s._v('>'),
                      ]),
                      s._v('评论'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('value')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"hot"')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"small"')]),
                        s._v('>'),
                      ]),
                      s._v('回复'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(3),
            s._v(' '),
            a('p', [s._v('以红点的形式标注需要关注的内容。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [a('py-badge', { attrs: { 'is-dot': '' } }, [s._v('数据查询')])],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('除了数字外，设置 is-dot 属性，它接受一个 Boolean。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('is-dot')]),
                        s._v('>'),
                      ]),
                      s._v('数据查询'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-badge')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(4),
            s._v(' '),
            s._m(5),
          ],
          1
        );
      };

      const r = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h2', { attrs: { id: 'badge-an-niu' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#badge-an-niu', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Badge 按钮'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'ji-chu-yong-fa' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#ji-chu-yong-fa', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 基础用法'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'zi-ding-yi-nei-rong' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#zi-ding-yi-nei-rong', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 自定义内容'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'xiao-hong-dian' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#xiao-hong-dian', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 小红点'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'attributes' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#attributes', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Attributes'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('table', { staticClass: 'table' }, [
            a('thead', [
              a('tr', [
                a('th', [s._v('参数')]),
                s._v(' '),
                a('th', [s._v('说明')]),
                s._v(' '),
                a('th', [s._v('类型')]),
                s._v(' '),
                a('th', [s._v('可选值')]),
                s._v(' '),
                a('th', [s._v('默认值')]),
              ]),
            ]),
            s._v(' '),
            a('tbody', [
              a('tr', [
                a('td', [s._v('value')]),
                s._v(' '),
                a('td', [s._v('显示值')]),
                s._v(' '),
                a('td', [s._v('string, number')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('max')]),
                s._v(' '),
                a('td', [s._v("最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型")]),
                s._v(' '),
                a('td', [s._v('number')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('is-dot')]),
                s._v(' '),
                a('td', [s._v('小圆点')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('hidden')]),
                s._v(' '),
                a('td', [s._v('隐藏 badge')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
            ]),
          ]);
        },
      ];

      const n = a('2455');
      function v(s) {
        a('5677');
      }
      const _ = null;

      const e = !1;

      const c = v;

      const i = null;

      const h = null;

      const p = Object(n.a)(_, l, r, e, c, i, h);
      t.default = p.exports;
    },
    5677(s, t, a) {
      let l = a('b0c5');
      typeof l === 'string' && (l = [[s.i, l, '']]), l.locals && (s.exports = l.locals);
      const r = a('499e').default;
      r('be9c56c4', l, !0, {});
    },
    '56b5': function(s, t, a) {
      let l = a('1b52');
      typeof l === 'string' && (l = [[s.i, l, '']]), l.locals && (s.exports = l.locals);
      const r = a('499e').default;
      r('2a4dc5fe', l, !0, {});
    },
    '5dad': function(s, t, a) {
      a.r(t);
      const l = function() {
        const s = this;

        const t = s.$createElement;
        s._self._c;
        return s._m(0);
      };

      const r = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('section', [
            a('h2', { attrs: { id: 'kuai-su-shang-shou' } }, [
              a(
                'a',
                {
                  staticClass: 'header-anchor',
                  attrs: { href: '#kuai-su-shang-shou', 'aria-hidden': 'true' },
                },
                [s._v('¶')]
              ),
              s._v(' 快速上手'),
            ]),
          ]);
        },
      ];

      const n = a('2455');

      const v = null;

      const _ = !1;

      const e = null;

      const c = null;

      const i = null;

      const h = Object(n.a)(v, l, r, _, e, c, i);
      t.default = h.exports;
    },
    6042(s, t, a) {
      a.r(t);
      const l = function() {
        const s = this;

        const t = s.$createElement;

        const a = s._self._c || t;
        return a('section');
      };

      const r = [];

      const n = a('2455');

      const v = null;

      const _ = !1;

      const e = null;

      const c = null;

      const i = null;

      const h = Object(n.a)(v, l, r, _, e, c, i);
      t.default = h.exports;
    },
    '7c7a': function(s, t, a) {
      a.r(t);
      const l = {
        methods: {
          closeAlert() {
            alert('您正在关闭alert');
          },
        },
      };

      const r = function() {
        const s = this;

        const t = s.$createElement;

        const a = s._self._c || t;
        return a(
          'section',
          [
            s._m(0),
            s._v(' '),
            a('p', [s._v('提示信息弹框，包含4种结果弹框，不会自动关闭。')]),
            s._v(' '),
            s._m(1),
            s._v(' '),
            a('p', [s._v('用于提示的信息展示弹框，有4中不同结果的弹框。。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-alert', { attrs: { type: 'info' } }, [s._v('默认提示信息')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'success' } }, [s._v('成功提示信息')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'warning' } }, [s._v('警告提示信息')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'error' } }, [s._v('失败提示信息')]),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('type 接收 info、success、warning 和 error 四种字符串类型。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v('>'),
                      ]),
                      s._v('默认提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v('>'),
                      ]),
                      s._v('成功提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"warning"')]),
                        s._v('>'),
                      ]),
                      s._v('警告提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"error"')]),
                        s._v('>'),
                      ]),
                      s._v('失败提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(2),
            s._v(' '),
            a('p', [s._v('可以设置是否显示关闭按钮，或以文字代替关闭按钮。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-alert', { attrs: { type: 'info', closable: !1 } }, [s._v('默认提示信息')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'success' } }, [s._v('成功提示信息')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'warning', 'close-text': '关闭' } }, [
                    s._v('警告提示信息'),
                  ]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'error', 'close-text': '我知道了' } }, [
                    s._v('失败提示信息'),
                  ]),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v(
                    '定义 closable 为 Boolean 类型，用于设置是否显示关闭按钮，close-text 为String 类型，用于设置替代关闭按钮的文字。'
                  ),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':closable')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"false"')]),
                        s._v('>'),
                      ]),
                      s._v('默认提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v('>'),
                      ]),
                      s._v('成功提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"warning"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('close-text')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"关闭"')]),
                        s._v('>'),
                      ]),
                      s._v('警告提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"error"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('close-text')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"我知道了"')]),
                        s._v('>'),
                      ]),
                      s._v('失败提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(3),
            s._v(' '),
            a('p', [s._v('显示标题提示信息。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-alert', { attrs: { type: 'info', title: '提示' } }, [s._v('默认提示信息')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'success', title: '提示', 'is-center': !0 } }, [
                    s._v('成功提示信息'),
                  ]),
                  s._v(' '),
                  a(
                    'py-alert',
                    { attrs: { type: 'warning', 'close-text': '关闭', 'is-center': !0 } },
                    [s._v('警告提示信息')]
                  ),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v('title 接收String类型作为标题，is-center设置为true时，文字居中显示。'),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('title')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"提示"')]),
                        s._v('>'),
                      ]),
                      s._v('默认提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('title')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"提示"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':is-center')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v('>'),
                      ]),
                      s._v('成功提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"warning"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('close-text')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"关闭"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':is-center')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v('>'),
                      ]),
                      s._v('警告提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(4),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-alert', { attrs: { type: 'info', title: '提示', 'title-icon': !0 } }, [
                    s._v('默认提示信息'),
                  ]),
                  s._v(' '),
                  a(
                    'py-alert',
                    {
                      attrs: {
                        type: 'success',
                        title: '提示',
                        'is-center': !0,
                        'title-icon': !0,
                      },
                    },
                    [s._v('成功提示信息')]
                  ),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('title-icon 接收Boolean类型，值为true时标题显示图标。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('title')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"提示"')]),
                        s._v('  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':title-icon')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v('>'),
                      ]),
                      s._v('默认提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('title')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"提示"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':is-center')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v('  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':title-icon')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v('>'),
                      ]),
                      s._v('成功提示信息'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(5),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-alert', { attrs: { type: 'error', title: '提示', 'show-icon': !0 } }, [
                    a('p', [s._v('发生错误了')]),
                    s._v(' '),
                    a('p', [s._v('请尽快解决')]),
                  ]),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('show-icon 接收Boolean类型，值为true时显示辅助性图标。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"error"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('title')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"提示"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v(':show-icon')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"true"')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('p')]),
                        s._v('>'),
                      ]),
                      s._v('发生错误了'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('p')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('p')]),
                        s._v('>'),
                      ]),
                      s._v('请尽快解决'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('p')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(6),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-alert', { attrs: { type: 'info' } }, [s._v('默认字号')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'info', size: 'medium' } }, [s._v('medium字号')]),
                  s._v(' '),
                  a('py-alert', { attrs: { type: 'info', size: 'large' } }, [s._v('large字号')]),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  a('strong', [s._v('size')]),
                  s._v(' 接收String类型，值为 '),
                  a('strong', [s._v('medium')]),
                  s._v(' 时显示中号字号，值为 '),
                  a('strong', [s._v('large')]),
                  s._v(' 时显示大号字号。'),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v('>'),
                      ]),
                      s._v('默认字号'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"medium"')]),
                        s._v('>'),
                      ]),
                      s._v('medium字号'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('size')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"large"')]),
                        s._v('>'),
                      ]),
                      s._v('large字号'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(7),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a(
                    'py-alert',
                    {
                      attrs: { type: 'info', 'close-text': '关闭' },
                      on: { close: s.closeAlert },
                    },
                    [s._v('关闭alert')]
                  ),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('show-icon 接收Boolean类型，值为true时显示辅助性图标。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('@close')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"closeAlert"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('close-text')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"关闭"')]),
                        s._v('>'),
                      ]),
                      s._v('关闭alert'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-alert')]),
                        s._v('>'),
                      ]),
                      s._v('\n\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'javascript' } }, [
                        s._v('\n'),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('export')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-keyword' } }, [s._v('default')]),
                        s._v(' {\n  '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('methods')]),
                        s._v(': {\n    closeAlert() {\n      alert('),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v("'您正在关闭alert'")]),
                        s._v(');\n    }\n  },\n};\n'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('script')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(8),
            s._v(' '),
            s._m(9),
            s._v(' '),
            s._m(10),
            s._v(' '),
            s._m(11),
          ],
          1
        );
      };

      const n = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h2', { attrs: { id: 'alert-ti-shi' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#alert-ti-shi', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Alert 提示'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'ji-chu-yong-fa' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#ji-chu-yong-fa', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 基础用法'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'zi-ding-yi-guan-bi-an-niu' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#zi-ding-yi-guan-bi-an-niu', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 自定义关闭按钮'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'dai-biao-ti' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#dai-biao-ti', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 带标题'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'dai-tu-biao-biao-ti' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#dai-tu-biao-biao-ti', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 带图标标题'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'dai-tu-biao-wen-zi' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#dai-tu-biao-wen-zi', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 带图标文字'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'bu-tong-zi-hao-da-xiao' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#bu-tong-zi-hao-da-xiao', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 不同字号大小'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'guan-bi-shi-jian' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#guan-bi-shi-jian', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 关闭事件'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'attributes' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#attributes', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Attributes'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('table', { staticClass: 'table' }, [
            a('thead', [
              a('tr', [
                a('th', [s._v('参数')]),
                s._v(' '),
                a('th', [s._v('说明')]),
                s._v(' '),
                a('th', [s._v('类型')]),
                s._v(' '),
                a('th', [s._v('可选值')]),
                s._v(' '),
                a('th', [s._v('默认值')]),
              ]),
            ]),
            s._v(' '),
            a('tbody', [
              a('tr', [
                a('td', [s._v('type')]),
                s._v(' '),
                a('td', [s._v('提示类型')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('info/success/warning/error')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('closable')]),
                s._v(' '),
                a('td', [s._v('是否显示关闭提示按钮')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('true/false')]),
                s._v(' '),
                a('td', [s._v('true')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('close-text')]),
                s._v(' '),
                a('td', [s._v('定义关闭按钮文字')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('title')]),
                s._v(' '),
                a('td', [s._v('提示信息标题')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('is-center')]),
                s._v(' '),
                a('td', [s._v('是否居中显示')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('true/false')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('show-icon')]),
                s._v(' '),
                a('td', [s._v('是否显示辅助性图标')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('true/false')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('title-icon')]),
                s._v(' '),
                a('td', [s._v('是否显示标题图标')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('true/false')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('size')]),
                s._v(' '),
                a('td', [s._v('设置文字大小')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('medium/large')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
            ]),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'events' } }, [
            a(
              'a',
              { staticClass: 'header-anchor', attrs: { href: '#events', 'aria-hidden': 'true' } },
              [s._v('¶')]
            ),
            s._v(' Events'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('table', { staticClass: 'table' }, [
            a('thead', [
              a('tr', [
                a('th', [s._v('事件名称')]),
                s._v(' '),
                a('th', [s._v('说明')]),
                s._v(' '),
                a('th', [s._v('类型')]),
              ]),
            ]),
            s._v(' '),
            a('tbody', [
              a('tr', [
                a('td', [s._v('close')]),
                s._v(' '),
                a('td', [s._v('点击关闭按钮触发')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
            ]),
          ]);
        },
      ];

      const v = a('2455');
      function _(s) {
        a('162d');
      }
      const e = !1;

      const c = _;

      const i = null;

      const h = null;

      const p = Object(v.a)(l, r, n, e, c, i, h);
      t.default = p.exports;
    },
    '85a8': function(s, t, a) {
      (t = s.exports = a('2350')(!1)),
        t.push([s.i, '\n.py-alert{\n  margin-bottom: 10px;\n}\n', '']);
    },
    b0c5(s, t, a) {
      (t = s.exports = a('2350')(!1)),
        t.push([s.i, '\n.py-badge + .py-badge{\n    margin-left: 30px;\n}\n', '']);
    },
    b536(s, t, a) {
      a.r(t);
      const l = function() {
        const s = this;

        const t = s.$createElement;
        s._self._c;
        return s._m(0);
      };

      const r = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('section', [
            a('h2', { attrs: { id: 'layout-bu-ju' } }, [
              a(
                'a',
                {
                  staticClass: 'header-anchor',
                  attrs: { href: '#layout-bu-ju', 'aria-hidden': 'true' },
                },
                [s._v('¶')]
              ),
              s._v(' Layout 布局'),
            ]),
            s._v(' '),
            a('h3', { attrs: { id: 'ji-chu-yong-fa' } }, [
              a(
                'a',
                {
                  staticClass: 'header-anchor',
                  attrs: { href: '#ji-chu-yong-fa', 'aria-hidden': 'true' },
                },
                [s._v('¶')]
              ),
              s._v(' 基础用法'),
            ]),
          ]);
        },
      ];

      const n = a('2455');

      const v = null;

      const _ = !1;

      const e = null;

      const c = null;

      const i = null;

      const h = Object(n.a)(v, l, r, _, e, c, i);
      t.default = h.exports;
    },
    cab1(s, t, a) {
      a.r(t);
      const l = function() {
        const s = this;

        const t = s.$createElement;
        s._self._c;
        return s._m(0);
      };

      const r = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('section', [
            a('h2', { attrs: { id: 'geng-xin-ri-zhi' } }, [
              a(
                'a',
                {
                  staticClass: 'header-anchor',
                  attrs: { href: '#geng-xin-ri-zhi', 'aria-hidden': 'true' },
                },
                [s._v('¶')]
              ),
              s._v(' 更新日志'),
            ]),
          ]);
        },
      ];

      const n = a('2455');

      const v = null;

      const _ = !1;

      const e = null;

      const c = null;

      const i = null;

      const h = Object(n.a)(v, l, r, _, e, c, i);
      t.default = h.exports;
    },
    d783(s, t, a) {
      a.r(t);
      const l = function() {
        const s = this;

        const t = s.$createElement;

        const a = s._self._c || t;
        return a(
          'section',
          [
            s._m(0),
            s._v(' '),
            a('p', [s._v('常用的操作按钮。')]),
            s._v(' '),
            s._m(1),
            s._v(' '),
            a('p', [s._v('基础的按钮用法。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a('div', { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' }, [
                a(
                  'div',
                  { staticClass: 'col' },
                  [
                    a('py-button', { attrs: { type: 'default' } }, [s._v('default')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'primary' } }, [s._v('primary')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'dashed' } }, [s._v('dashed')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'text' } }, [s._v('text')]),
                  ],
                  1
                ),
                s._v(' '),
                a(
                  'div',
                  { staticClass: 'col' },
                  [
                    a('py-button', { attrs: { type: 'info' } }, [s._v('info')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'success' } }, [s._v('success')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'warning' } }, [s._v('warning')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'error' } }, [s._v('error')]),
                  ],
                  1
                ),
              ]),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('使用 type、plain 和 round 属性来定义 Button 的样式。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('div')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('class')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"col"')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"default"')]),
                        s._v('>'),
                      ]),
                      s._v('default'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"primary"')]),
                        s._v('>'),
                      ]),
                      s._v('primary'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"dashed"')]),
                        s._v('>'),
                      ]),
                      s._v('dashed'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"text"')]),
                        s._v('>'),
                      ]),
                      s._v('text'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('div')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('div')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('class')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"col"')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v('>'),
                      ]),
                      s._v('info'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v('>'),
                      ]),
                      s._v('success'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"warning"')]),
                        s._v('>'),
                      ]),
                      s._v('warning'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n    '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"error"')]),
                        s._v('>'),
                      ]),
                      s._v('error'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('div')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(2),
            s._v(' '),
            a('p', [s._v('按钮不可用状态。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a('div', { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' }, [
                a(
                  'div',
                  [
                    a('py-button', { attrs: { disabled: '' } }, [s._v('默认按钮')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'primary', disabled: '' } }, [
                      s._v('主要按钮'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'success', disabled: '' } }, [
                      s._v('成功按钮'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'info', disabled: '' } }, [s._v('信息按钮')]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'warning', disabled: '' } }, [
                      s._v('警告按钮'),
                    ]),
                    s._v(' '),
                    a('py-button', { attrs: { type: 'danger', disabled: '' } }, [s._v('危险按钮')]),
                  ],
                  1
                ),
              ]),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v('你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。'),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('div')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('>'),
                      ]),
                      s._v('默认按钮'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"primary"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('>'),
                      ]),
                      s._v('主要按钮'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"success"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('>'),
                      ]),
                      s._v('成功按钮'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"info"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('>'),
                      ]),
                      s._v('信息按钮'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"warning"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('>'),
                      ]),
                      s._v('警告按钮'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"danger"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('disabled')]),
                        s._v('>'),
                      ]),
                      s._v('危险按钮'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('div')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(3),
            s._v(' '),
            a('p', [s._v('带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a('py-button', { attrs: { type: 'primary', icon: 'py-icon-search' } }, [
                    s._v('搜索'),
                  ]),
                  s._v(' '),
                  a('py-button', { attrs: { type: 'primary' } }, [
                    s._v('上传'),
                    a('i', { staticClass: 'py-icon-upload py-icon--right' }),
                  ]),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [
                  s._v(
                    '设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。'
                  ),
                ]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"primary"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('icon')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"py-icon-search"')]),
                        s._v('>'),
                      ]),
                      s._v('搜索'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"primary"')]),
                        s._v('>'),
                      ]),
                      s._v('上传'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('i')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('class')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [
                          s._v('"py-icon-upload py-icon--right"'),
                        ]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('i')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(4),
            s._v(' '),
            a('p', [s._v('以按钮组的方式出现，常用于多项类似操作。')]),
            s._v(' '),
            a('demo-block', { staticClass: 'demo-box' }, [
              a(
                'div',
                { staticClass: 'source', attrs: { slot: 'source' }, slot: 'source' },
                [
                  a(
                    'py-button-group',
                    [
                      a('py-button', { attrs: { type: 'primary', icon: 'py-icon-arrow-left' } }, [
                        s._v('上一页'),
                      ]),
                      s._v(' '),
                      a('py-button', { attrs: { type: 'primary' } }, [
                        s._v('下一页'),
                        a('i', { staticClass: 'py-icon-arrow-right py-icon--right' }),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              s._v(' '),
              a('div', { staticClass: 'description' }, [
                a('p', [s._v('使用<py-button-group>标签来嵌套你的按钮。')]),
              ]),
              s._v(' '),
              a(
                'div',
                { staticClass: 'highlight', attrs: { slot: 'highlight' }, slot: 'highlight' },
                [
                  a('pre', { pre: !0 }, [
                    a('code', { attrs: { class: 'hljs language-html' } }, [
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button-group')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"primary"')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('icon')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [
                          s._v('"py-icon-arrow-left"'),
                        ]),
                        s._v('>'),
                      ]),
                      s._v('上一页'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n  '),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('type')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [s._v('"primary"')]),
                        s._v('>'),
                      ]),
                      s._v('下一页'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('<'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('i')]),
                        s._v(' '),
                        a('span', { attrs: { class: 'hljs-attr' } }, [s._v('class')]),
                        s._v('='),
                        a('span', { attrs: { class: 'hljs-string' } }, [
                          s._v('"py-icon-arrow-right py-icon--right"'),
                        ]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('i')]),
                        s._v('>'),
                      ]),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                      a('span', { attrs: { class: 'hljs-tag' } }, [
                        s._v('</'),
                        a('span', { attrs: { class: 'hljs-name' } }, [s._v('py-button-group')]),
                        s._v('>'),
                      ]),
                      s._v('\n'),
                    ]),
                  ]),
                ]
              ),
            ]),
            s._v(' '),
            s._m(5),
            s._v(' '),
            s._m(6),
          ],
          1
        );
      };

      const r = [
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h2', { attrs: { id: 'button-an-niu' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#button-an-niu', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Button 按钮'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'ji-chu-yong-fa' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#ji-chu-yong-fa', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 基础用法'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'jin-yong-zhuang-tai' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#jin-yong-zhuang-tai', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 禁用状态'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'tu-biao-an-niu' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#tu-biao-an-niu', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 图标按钮'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'an-niu-zu' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#an-niu-zu', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' 按钮组'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('h3', { attrs: { id: 'attributes' } }, [
            a(
              'a',
              {
                staticClass: 'header-anchor',
                attrs: { href: '#attributes', 'aria-hidden': 'true' },
              },
              [s._v('¶')]
            ),
            s._v(' Attributes'),
          ]);
        },
        function() {
          const s = this;

          const t = s.$createElement;

          const a = s._self._c || t;
          return a('table', { staticClass: 'table' }, [
            a('thead', [
              a('tr', [
                a('th', [s._v('参数')]),
                s._v(' '),
                a('th', [s._v('说明')]),
                s._v(' '),
                a('th', [s._v('类型')]),
                s._v(' '),
                a('th', [s._v('可选值')]),
                s._v(' '),
                a('th', [s._v('默认值')]),
              ]),
            ]),
            s._v(' '),
            a('tbody', [
              a('tr', [
                a('td', [s._v('size')]),
                s._v(' '),
                a('td', [s._v('尺寸')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('medium / small / mini')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('type')]),
                s._v(' '),
                a('td', [s._v('类型')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('primary / success / warning / danger / info / text')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('plain')]),
                s._v(' '),
                a('td', [s._v('是否朴素按钮')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('round')]),
                s._v(' '),
                a('td', [s._v('是否圆角按钮')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('circle')]),
                s._v(' '),
                a('td', [s._v('是否圆形按钮')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('loading')]),
                s._v(' '),
                a('td', [s._v('是否加载中状态')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('disabled')]),
                s._v(' '),
                a('td', [s._v('是否禁用状态')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('icon')]),
                s._v(' '),
                a('td', [s._v('图标类名')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('—')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('autofocus')]),
                s._v(' '),
                a('td', [s._v('是否默认聚焦')]),
                s._v(' '),
                a('td', [s._v('boolean')]),
                s._v(' '),
                a('td', [s._v('—')]),
                s._v(' '),
                a('td', [s._v('false')]),
              ]),
              s._v(' '),
              a('tr', [
                a('td', [s._v('native-type')]),
                s._v(' '),
                a('td', [s._v('原生 type 属性')]),
                s._v(' '),
                a('td', [s._v('string')]),
                s._v(' '),
                a('td', [s._v('button / submit / reset')]),
                s._v(' '),
                a('td', [s._v('button')]),
              ]),
            ]),
          ]);
        },
      ];

      const n = a('2455');
      function v(s) {
        a('56b5');
      }
      const _ = null;

      const e = !1;

      const c = v;

      const i = null;

      const h = null;

      const p = Object(n.a)(_, l, r, e, c, i, h);
      t.default = p.exports;
    },
  },
]);
// # sourceMappingURL=zh-CN.92fd278.js.map
