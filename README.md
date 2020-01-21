# typeScript-study

# 1 什么是typescript？
typescript 是JavaScript的一个超集，支持es6.
# 2 JavaScript与typescript区别
typescript是JavaScript的一个超集，扩展了JavaScript的语法，typescript通过类型注解提供静态编译时的静态类型检查。
const hello : string = 'hello world'
console.log(hello) // hello world
# 3 安装 sudo npm install -g typescript
检查是否安装成功？
tsc -v
# 4 测试例子
const hello :string = 'hello world'
console.log(hello) // hello world
先把test.ts文件利用tsc.test.ts 生成test.js
再利用node test.js 打印
# 5 同时编译多个ts文件
tsc test.ts test2.ts
# 6 ts组成部分
模块 函数 变量 语句表达式 注释
# 7 ts基础类型
任意类型 any 申明为any的变量可以赋予任意类型的值 let x: any=6
数组类型 number 双精度64位浮点值 可以表示整数和小数
字符数类型 string
布尔类型 boolean
数组类型 无 申明变量为数组 let arr:[] = [1,2] 或者使用数组泛型 let arr: Array <number> = [1,2]
元组 无 表示已知元素数量和类型的数组。 let arr: [string, number] arr = [xxf,666]
枚举 enum 用来定义数值集合。 enum color(yellow, blue, white) let c = color.yellow console.log(c) // 0 
void void 用来表示方法返回值的类型 表示该方法没有返回值
const funcntion hello(): void {
  alert('hello world')
}
null null 表示对象值缺失
undefined undefined 表示对象值未定义
never never 是null 和undefined的子类型 表示不会出现的值
# 8 ts变量申明
变量名称可以以字母 下划线 数字 $命名
# 9 变量类型判断
类型判断可以用来手动指定一个值得类型
多维数组
var multi:number[][] = [[1,2,3],[23,24,25]]
console.log([0,0]) //1
console.log([1,1]) //24
# 10 TypeScript 联合类型
var val:string|number
val = 12
console.log("数字为 "+ val)
val = "Runoob"
console.log("字符串为 " + val)

