# typeScript-study

1什么是typescript？
typescript 是JavaScript的一个超集，支持es6.
2JavaScript与typescript区别
typescript是JavaScript的一个超集，扩展了JavaScript的语法，typescript通过类型注解提供静态编译时的静态类型检查。
const hello : string = 'hello world'
console.log(hello) // hello world
3 安装 sudo npm install -g typescript
检查是否安装成功？
tsc -v
4测试例子
const hello :string = 'hello world'
console.log(hello) // hello world
先把test.ts文件利用tsc.test.ts 生成test.js
再利用node test.js 打印