## ES Modules的用法

1. import的时候必须输入完整的名称不可省略.js等

2. ./ 是相对路径 / 开头是绝对路径 可以是url  比如引用CDN

3. import './xxxx.js' 这样引用只会执行 不会引入变量

4. import 只能在最顶层作用域

```javascript 
import('./xxxx.js').then(function(module){
console.log(module)}) 
//这样可以动态加载
```
## 如何在browser里使用 Es module


