# 函数与映射

函数与映射是一对近义词，在不同语境里，它们有时根本没有区别，有时有区别。这里我只讲述一个比较宽泛的概念性的定义。

### 映射 map

> an operation that associates each element of a given set (the domain) with one or more elements of a second set (the range).

任何把 a 对应到 b 的操作（或者说描述 a -> b 的对应关系的规则）称之为映射。


![](https://raw.githubusercontent.com/hackape/react-for-designers/master/images/func_1.png)
![](https://raw.githubusercontent.com/hackape/react-for-designers/master/images/func_2.png)

* 字典的索引页是一个映射，把索引项（比如部首）通过页码对应到词条
* 地图是一个映射，把纸张上的图例对应到概念上的地理位置
* 榨汁机是一个映射，把一个水果对应到一杯果汁
* 扭蛋机是一个映射，把一个硬币对应到一个彩蛋

特别指出，扭蛋机作为一个映射的对应关系是不确定的，
每次投入同样一个硬币，你并不知道它会给你一个什么蛋，有时候它故障了，就没有蛋了。

```
a -> b
a, b -> x, y
a -> a or b or c # 对应关系可以是不确定的
```

### 数学里的函数 function in math

函数一定是映射，映射不一定是函数。函数是一种特殊的映射，在映射之上增加一个限定：对应关系必须是**确定的**，可复现的。

扭蛋机是映射，但不是数学上的函数。

```
f(x) = x + 1
f(x) = x^2
f(x, y) = x + y
f(x) = <x+1, x*2> # 向量
```

### 程序语言里的函数 function in programming

程序语言里的函数实质上是映射。它接收一个输入，给出一个输出，`input -> output`。
但是取决于你如何写这个函数，它的 output 可能是确定的，也可能是不确定的。

### js 的函数语法

定义/声明一个函数 (define/declare a function)
```js
function getHello () {
  return 'hello'
}

function add (a, b) {
  return a + b
}

var add = (a, b) => a + b
var multiply = (a, b) => { return a * b }

var sayHello = who => {
  let message = 'hello' + ' ' + who
  console.log(message)
}
```

调用一个函数 (call/invoke a function)
```js
sayHello('designers')

var sayHello = who => {
  var message = getHello() + ' ' + who
  console.log(message)
}
```
