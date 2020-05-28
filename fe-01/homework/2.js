var tmp =123;
if (true) {
    console.log(tmp);
    let tmp
    
}

// 答案是报错 Cannot access 'tmp' before initialization

// 因为在let申明变量的时候 let是没有变量提升的 而在let的作用域内 你不能提前使用没有申明的变量