# typescrit

## 强类型与弱类型
强类型不逊于有任意的隐式类型转换，弱类型相反。

## 静态类型和动态类型

静态类型：声明过后 变量的类型就是明确的
动态类型：在运行的时候才能明确变量的类型
## js类型系统

JS是动态类型+弱类型  简直任性

缺失了类型系统的可靠性

## TS的原始类型

基础类型boolean number string array Null, Undefined  和es6一样

### 元组: Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同, 对应位置的类型需要相同。

```javascript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error

//当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
```
### 枚举: enum
对JavaScript标准数据类型的一个补充,使用枚举类型可以为一组数值赋予友好的名字。
```javascript

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
//或者，全部都采用手动赋值：
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
//枚举类型提供的一个便利是你可以由枚举的值得到它的名字
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```
### Any
any, 为不清楚类型的变量指定一个类型, 不通过类型检查器检测.
### Void
void类型像是与any类型相反，表示没有任何类型。当一个函数没有返回值时,其返回值类型通常是 void.
### never
never, 表示的是那些永不存在的值的类型。
>例如never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；

>变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

>never类型是任何类型的子类型，也可以赋值给任何类型；

>然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

>返回never的函数必须存在无法达到的终点


## 接口 和 类
### 接口
interface:接口只声明成员方法，不做实现。

```javascript
interface Point {
    lng:number;
    lat:number;
    sayPosition():void;
}
```

### 类

而class则是完整的实现：
```javascript
class Point {
    constructor(lng,lat){
        this.lng = lng;
        this.lat = lat;
    }
    sayPosition(){
        console.log('point:',this.lng,this.lat);
    }
}
```

### 抽象类 

有抽象方法的类都是抽象类 只声明不实现的方法就是抽象方法abstract 关键字
