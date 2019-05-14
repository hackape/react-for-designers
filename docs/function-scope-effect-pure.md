# 作用域，副作用与纯函数

## 作用域 scope

函数经常被描述成一个黑盒。

![](https://raw.githubusercontent.com/hackape/react-for-designers/master/images/func_4.jpg)
![](https://raw.githubusercontent.com/hackape/react-for-designers/master/images/func_3.jpg)

写代码可以定义函数，每个函数有自己的作用域，简单理解成盒子的边界就是它的作用域。
盒子外的其他人是没办法访问 (access) 盒子里的东西的，但是在盒子内部，却可以访问盒子外的东西。

例一：在函数作用域内定义的一个变量，无法在作用域外访问
```js
function scopeA() {
  var aVariable = "I'm a variable"
}

scopeA()

console.log(aVariable) // Uncaught ReferenceError: aVariable is not defined
```

例二：在全局作用域内定义的一个变量，可以在函数作用域里访问
```js
var aVariable = "I'm a variable"

function scopeA() {
  console.log(aVariable)
}

scopeA() // Good
```

函数内部可以再定义函数，此时作用域相当于盒子里套盒子。
```js
var pink = "I'm Mr. Pink"

function scopeA() {
  var orange = "I'm Mr. Orange"
  function scopeB() {
    console.log(pink)   // OK, pink from global scope
    console.log(orange) // OK, orange from scopeA
    var black = "I'm Mr. Black"
  }
  
  scopeB()
  console.log(black) // BAD! black from scopeB not accessible in scopeA
}

scopeA()
```

## 副作用 side effect

函数接收输入，计算输出，这就是它的主作用 (main effect)。如果除此之外，函数还额外做了*对外界有影响*的事情，这些事情称之为副作用。

```
f(x) = 先给 jaskni 打 call，然后 x + 1
```

```js
function addOne(x) {
  window.alert('call jaskni')
  return x + 1
}

addOne(5)
```

## 纯函数 pure function

输出完全由它的输入决定，且没有副作用的函数称之为纯函数
