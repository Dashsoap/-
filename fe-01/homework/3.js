var arr = [12, 34, 32, 89, 4]


arr1 = arr.sort(
    function (a, b) {
        return a - b
    }
)// sort 接收一个函数 排序 从小到大排序
console.log(arr1[0]);//最小值就是第一个
