var a = [];

for (var i = 0; i < 10; i++) {  // 这里使用的是 var声明的变量i 作用域是全局作用域
    a[i]= function () {// 这里只是定义了function 但是没有调用
        console.log(i);
        
    }
    
}// 循环执行完毕 i = 10 但是因为不是使用的let 没有产生闭包 每一个function存储的i都是最终i的结果

a[6]()//所以这里输出的是10  

// 如果改成用let 声明变量i 那么结果会是6
