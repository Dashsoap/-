var a =10;
var obj = {
    a:20,
    fn(){
        setTimeout(()=>{
            console.log(this.a);
            
        })
    }
}
obj.fn()// 输出20

// 题解 this指向的是调用环境的this 因为箭头函数不改变 所以这里的this就是fn的this
// 又因为fn的this指向obj  这里是obj调用的fn obj 的a是20 所以输出20

// 如果fn换成箭头函数 此处输出10