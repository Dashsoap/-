const fp = require("lodash/fp")
class Container {
    static of(value) {
        return new Container(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return Container.of(fn(this._value))
    }
}

class Maybe {

    static of(x) {

        return new Maybe(x)
    }
    isNothing() {
        return this._value === null || this._value === undefined

    }
    constructor(x) {
        this._value = x;
    }
    map(fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._value))
    }
}
//练习1 
let maybe = Maybe.of([5, 6, 1])

let ex1 = maybe.map(x => {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] + 1
        }
        return x
    })
    // console.log(ex1);
    // 练习2
let xs = Container.of(['do', 'ray',
    'me', 'fa ', 'so', 'la', 'ti ', 'do'
])
let ex2 = xs.map(
        x => {
            return fp.first(x)
        }
    )
    // 练习3
let safeProp = fp.curry(function(x, o) {
    return Maybe.of(o[x])
})
let user = { id: 2, name: "Albert" }

let ex3 = safeProp('name', user).map(x => {
        return fp.first(x)
    })
    // console.log(ex3);
    // 练习4

let ex4 = function(n) {
    const a = Maybe.of(n)
    a.map(x => {
        return parseInt(x)
    })
}
console.log(ex4("123"))

// 怎么都是undefined 我觉得我写对了 麻烦老师帮忙看看 最后一问