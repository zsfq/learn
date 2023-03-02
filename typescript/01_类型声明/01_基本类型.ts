/*
 * @Author: fqiangzs@163.com
 * @Date: 2023-03-01 23:23:28
 * @LastEditTime: 2023-03-02 21:36:50
 * @FilePath: \pixijsDemo1d:\WorkSpace\学习\learn\typescript\01_类型声明\01_基本类型.ts
 * @Description: 
 */

//声明一个变量a,同时指定类型为number
let a:number;
a = 10;
console.log(a);
// a = "hello";    //报错，在ts中不能将字符串赋值给number类型

//如果变量的声明和赋值是同时进行的，TS会自动对变量进行类型检测
console.log("this is a log!");