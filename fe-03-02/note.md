# Vue源码阅读

### 首次渲染过程

首先初始化: Vue初始化 创建实例成员和静态成员

然后 调用构造函数 new Vue()

new Vue()调用了 this._init()方法 然后最终会调用 vm.$mount 方法 该方法在入口文件中 
![vm.$mount](https://raw.githubusercontent.com/Dashsoap/PhotoBed/master/uPic/4vAhDZ.png)

