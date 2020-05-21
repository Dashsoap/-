# 0 ECMAScript 新特性
*提前准备*
1. 打开terminal 输入 npm i nodemon -g
2. ode 版本V12.0+

需要注意的是 老师试用的是nodemon 1.19 现在的nodemon版本是2.0.4 已经迭代
所以不需要yarn nodemon xxx.js
直接nodemon xxx.js即可

## 0.1 ECMAScript的家庭成员

Javascript就是 ECMAScript，DOM和BOM三者的集合，根据宿主（浏览器）的不同，具体的表现形式也不尽相同，ie和其他的浏览器风格迥异。
*DOM* 就是通用的W3C的标准 而 *BOM* 就是各个浏览器之间的区别

Node.js 就是 ECMAScript和Node Api的合计 

但是说到JS的本身，其实就是ECMAScript

## 我们常说的ES6 就是2015年发布的 ES2015 
`async` 和`await` 是ES2016发布的 

 [ES2015的新特新](www.ecma-international.org/ecma-262/6.0/) 建议阅读

# 重大变化总结

## 解决原有语法上的问题和一些不足

### 作用域问题 应运而生的let

let 生成的变量 只能在当前所在的大括号中存在 是局部变量

在循环注册事件时每一次循环都会产生一个新的块 来保存当前状态 比如一下代码

```javascript

for(let i = 0;i<3;i++){
    console.log(i)
}// 0,1，2

//就相当于

{
    i=0;
    console.log(i)
}
{
    i=1;
    console.log(i)
}
{
    i=2;
    console.log(i)
}
//生成了三个块来存储每次循环的状态
```
let 与 var 不一样 没有变量提升

### const 一个定义恒量/常亮的关键字

>const定义的变量是不可修改的

>但是const定义 object 引用类型的值是可以修改的 但是地址不可以改变 不然会报错。

>引用类型：粗略的总结为 typeof函数调用后 返回object的变量 如 数组 函数 对象等

>编码建议： 拒绝使用var 只使用let和const


### 数组和对象的解构

数组的解构 
```javascript

var arr = ["A", "B", "C"];
var a = arr[0],
    b = arr[1],
    c = arr[2];
console.log(a);
//输出：A  之前都是这么用的

//现在可以
let [a, b, c] = ["A", "B", "C"];
console.log(a);
//输出：A

```



### 对原有语法进行增强

### 全心的对象、方法、功能

### 全新的数据结构和数据类型