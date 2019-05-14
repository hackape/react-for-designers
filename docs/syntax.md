# 基础语法

## 变量与赋值 variable & assignment 
```js
// 声明变量
var aVariable

// 给变量赋值，赋值的方向从右往左
aVariable = 1

// 声明的同时赋初始值
var aVariable = 1
```

变量不能是关键字
```js
if, for, while, function, in, var, const, let, ...
```

变量名可以使用大小写字母，`_`, `$`, 以及数字，但是第一个字符不能是数字

## 数字与基本运算 number & basic arithmetic
```js
var num = 1
var num = 0.5
var num = .5
var num = 1 + 2.5
var num = 5 - 2
var num = 3 * 7
var num = 2 / 6
```

## 字符串 string
```js
var str = "hello"
var str = 'hello'
var str = "I'm happy"
// \ 是转义字符 escape character
var str = 'I\'m happy'

// 字符串长度
var length = str.length
// 字符串拼接 concat, short for concatenation
var concatedStr = 'alpha' + 'beta'
```

## 布尔 boolean
```js
var t = true
var f = false
```

### 等价判断 equality check
```js
var t = true
t === true // true
t === false // false
1 === 1 // true
1 !== 1 // false
2 !== 1 // true
```

### 与或非 and, or, negate
```js
(true && false) === false
(true || false) === true
(false || true) === true
!true === false
```

### 两个特殊的值 undefined & null
```js
undefined // 未定义，声明变量如果没有初始值，那么值为 undefined
null // 用来强调表达“空”的含义

undefined === undefined
null === null
undefined !== null

!null === true
!undefined === true
Boolean(null) === false
Boolean(undefined) === false
```

## 条件语句 conditional statement
```js
if (true) {
  /* run */
}

if (false) {
  /* skip */
} else {
  /* run */
}

if (null) {
  /* skip */
} else if (undefined) {
  /* skip */
} else {
  /* run */
}

if (null) {
  /* skip */
} else if (undefined) {
  /* skip */
} else if (0) {
  /* skip */
} else if (-1) {
  /* run */
} else {
  /* skip */
}

var boolTrue = true
var boolFalse = false
if (boolTrue && boolFalse) { /* skip */ }
if (boolTrue || boolFalse) { /* run */ }
if (!boolFalse) { /* run */ }
```

## 对象与数组 object & array

对象，学名 object, 也叫 map，有的语言里（比如 python）还叫 dictionary
```js
map = { one: 1, two: 2 }
// one 和 two 学名称之为对象的属性，object properties
// 但通常称之为 key
map.one === 1
map['one'] === map.one
map.two === 2

// 重新赋值
map.two = 3
map.two !== 2
map.two === 3

// 删除一个 key
delete map.two
```

数组，学名 array, 也叫 list
```js
arr = [1, 2, 4, 8]
arr.length === 4

arr[0] === 1
arr[1] === 2
arr[2] === 4
arr[3] === 8

// 0, 1, 2, 3 这里称为 index，中文叫“指数”，但很少用
```

## 函数 function
```js
function add(a, b) {
  return a + b
}
// 关键字: function
// 函数名: add
// 括号定义参数: a 和 b
// 花括号定义函数体: { return a + b }

var result = add(1, 2)
result === 3

function addAndPlusOneThenLog(a, b) {
  var one = 1
  var result = a + b + one
  console.log(result)
  return result
}

var result = addAndPlusOneThenLog(1, 2)
result === 4

const add = (a, b) => {
  return a + b
}
```
