/*
 * @Author: 进阶滴小白
 * @Date: 2023-03-01 23:23:28
 * @LastEditTime: 2023-03-02 23:37:56
 * @Description:
 */
//声明一个变量a,同时指定类型为number
let a: number;
a = 10;
console.log(a);
// a = "hello";    //报错，在ts中不能将字符串赋值给number类型

/****************TS基本数据类型*********************/
//1.number类型
let num1: number = 10;
console.log(num1); //10

//2.boolean类型
let flag: boolean = false;
console.log(flag); //false

//3.任意类型any       在类型不确定或者可以赋任何值时使用，关闭类型检测
let anything: any = "hello";
anything = 4; //不报错

//4.unknown类型
let unknown1: unknown = 10;
unknown1 = "hello"; //不报错        unknown与any的区别在于，any类型可以赋值给其他类型变量，但是unknown不可以

//5.string 字符串类型
let str: string = "hello typescript!";
console.log(str); //hello typescript!

//6.void  通常用来设置函数返回值
//void用来表示空或者undefined
function fn(): void {
  console.log("无返回值类型的函数！");
}

//7.never 表示永远不会返回结果    可以用来进行报错
function fn2(): never {
  throw new Error("报错");
}

//8.object  任意的JS对象
let person: object = { name: "zhangsan", age: 18 };
let animal: { name: string; age: number }; //更常用的方式
// animal = {name:"猴子"};          //报错，animal必须包含两个属性，一个为string类型，一个为number类型
animal = { name: "猫", age: 23 };

let b: { name: string; age?: number }; //?表示该属性可选
b = { name: "孙悟空" }; //即使没有age属性也不报错

let c: { name: string; [propsName: string]: any }; //这里采用不定属性，也就是属性个数不确定的情况，其中propsName也可以是其他字符串，在此处仅仅占位而已
c = { name: "孙悟空", age: 500 }; //正确
c = { name: "猪八戒", age: 300, height: 145 }; //正确

//限制某个函数的参数及返回值,用来定义函数结构
let add: (a: number, b: number) => number;
add = function (a: number, b: number) {
  return a + b;
};

//9.array 数组类型
let nums: number[]; //第一种写法
nums = [1, 2, 3, 4, 5, 6];
// nums = [1,2,3,"hello"];  //报错

let numbers: Array<number>; //第一种写法：与上面是同类写法，没有什么区别，习惯用哪种都可以
numbers = [1, 2, 43, 4, 6, 7];

//10.tuple  元组：长度固定的数组-----在js中没有
let tuples: [string, string];
tuples = ["hello", "typescript"]; //正确
// tuples = ["hello"];             //错误，需要两个string类型的元素

//11.enum  枚举---------js中没有
enum Gender {
  Male = "男",
  Female = "女",
}
let gender: Gender;
let people = { name: "lisi", age: 18, gender: Gender.Male };

// & 的使用
let j: { name: string } & { age: number }; //j必须同时满足两个条件
// j = {name:"王五"};      //不能将类型“{ name: string; }”分配给类型“{ name: string; } & { age: number; }”。
j = { name: "王五", age: 23 };

// 类型别名
type myType1 = string; //将string类型用myType1代替，但是代替基本类型没什么用，通常用来代替一些复杂的类型
let countrty: myType1;

type myType = 1 | 2 | 3 | 4 | 5;
let n: myType; //这样就不用写那么长的 1 | 2 | 3 | 4 |5 了