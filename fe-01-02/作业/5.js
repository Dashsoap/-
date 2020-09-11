const fp = require( 'lodash/fp' )

const cars = [
    {name: "Ferrari FF", horsepower: 660,
    dollarvalue: 700000, instock: true},
    {name: "Spyker cl2 Zagato",
    horsepower: 650, dollarvalue: 648000,
    instock: false},
    {name: "Jaguar XKR-S", horsepower:
    550, dollarvalue: 132000, instock:
    false},
    {name: "Audi R8", horsepower: 525,
    dollarvalue: 114200, instock: false},
    {name: "Aston Martin One-77",
    horsepower: 750, dollarvalue: 1850000,
    instock: true},
    {name: "Pagani Huayra", horsepower:
    700, dollarvalue: 1300000, instock:
    false}
] 

// 练习1
const last = arr =>fp.last(arr)
const re = obj => fp.prop('instock',obj)
const f1 = fp.flowRight(re,last)
// console.log(f1(cars));
// 练习2
const first = arr =>fp.first(cars)
const name = obj=>fp.prop('name',obj)
const f2 = fp.flowRight(name,first)
// console.log(f2(cars));
// 练习3
let average = function(xs) { 
    return fp.reduce(fp.add, 0, xs)/ xs.length 
}

let getDolores = function (car) {
   return fp.map(function(car) { 
       return car.dollarvalue }, cars)
    
}

const averageDollarValue = fp.flowRight(average,getDolores)
// console.log(averageDollarValue(cars));
//练习4

let _underscore = fp.replace(/\W+/g,'_')

const map = fp.map((fn,arr)=>fp.map(arr,fn))

const tolow = arr =>fp.toLower(arr)
const sanitizeNames =fp.flowRight(_underscore,tolow)

// console.log(sanitizeNames(cars[1].name));



