1.请简述 Vue 首次渲染的过程。
```javascript
首先进行Vue的初始化，初始化Vue的实例成员以及静态成员。
当初始化结束之后，开始调用构造函数，在构造函数中调用this._init()，这个方法相当于我们整个Vue的入口。
在_init()中调用this.$mount()，共有两个this.$mount()。
     第一个this.$mount()是entry-runtime-with-compiler.js入口文件，这个$mount()的核心作用是帮我们把模板编译成render函数，但它首先会判断一下当前是否传入了render选项，如果没有传入的话，它会去获取我们的template选项，如果template选项也没有的话，他会把el中的内容作为我们的模板，然后把模板编译成render函数，它是通过compileToFunctions()函数，帮我们把模板编译成render函数的,当把render函数编译好之后，它会把render函数存在我们的options.render中。
src\platforms\web\entry-runtime-with-compiler.js
如果没有传递render，把模版编译成render函数
compileToFunction()生成render()渲染函数
options.render=render
     第二个this.$mount()是runtime/index.js中的this.$mount()方法，这个方法首先会重新获取el，因为如果是运行时版本的话，是不会走entry-runtime-with-compiler.js这个入口中获取el，所以如果是运行时版本的话，我们会在runtime/index.js的$mount()中重新获取el。
src\platforms\web\runtime\index.js
mountComponent()
接下来调用mountComponent(),mountComponent()是在src/core/instance/lifecycle.js中定义的，在mountComponent()中，首先会判断render选项，如果没有render，但是传入了模板，并且当前是开发环境的话会发送警告，警告运行时版本不支持编译器。接下来会触发beforeMount这个生命周期中的钩子函数，也就是开始挂载之前。
然后定义了updateComponent()，在这个方法中，定义了_render和_update，_render的作用是生成虚拟DOM，_update的作用是将虚拟DOM转换成真实DOM，并且挂载到页面上来。
再接下来就是创建Watcher对象，在创建Watcher时，传递了updateComponent这个函数，这个函数最终是在Watcher内部调用的。在Watcher创建完之后还调用了get方法，在get方法中，会调用updateComponent()。
然后触发了生命周期的钩子函数mounted,挂载结束，最终返回Vue实例。
```
2.请简述 Vue 响应式原理。
```javascript
在生成vue实例时，为对传入的data进行遍历，使用Object.defineProperty把这些属性转为getter/setter.

Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

每个vue实例都有一个watcher实例，它会在实例渲染时记录这些属性，并在setter触发时重新渲染。
```

3.请简述虚拟 DOM 中 Key 的作用和好处。
在v-for的过程中，为给每一个节点设置key属性的作用：
        以便它能够跟踪每个节点的身份，在进行比较的时候，会基于 key 的变化重新排列元素顺序。从而重用和重新排序现有元素，并且会移除 key 不存在的元素。方便让 vnode 在 diff 的过程中找到对应的节点，然后成功复用。

设置key的好处：
        可以减少 dom 的操作，减少 diff 和渲染所需要的时间，提升了性能

4.
缓存公共的 mount 函数，并重写浏览器平台的 mount
判断是否传入了 render 函数，没有的话，是否传入了 template ，没有的话，则获取 el 节点的 outerHTML 作为 template
调用 baseCompile 函数
解析器(parse) 将模板字符串的模板编译转换成 AST 抽象语法树
优化器(optimize) - 对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化
通过 generate 将 AST 抽象语法树转换为 render 函数的 js 字符串
将 render 函数 通过 createFunction 函数 转换为 一个可以执行的函数
将 最后的 render 函数 挂载到 option 中
执行 公共的 mount 函数
