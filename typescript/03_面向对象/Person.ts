/*
 * @Author: 进阶滴小白
 * @Date: 2023-03-04 16:34:14
 * @LastEditTime: 2023-03-04 17:03:49
 * @Description:
 */
class Person {
  //定义属性
  name: string;
  age: number;
  static height: number = 170; //静态属性
  static readonly weight: number = 70; //静态只读属性

  //构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //实例方法
  say(content: string): void {
    console.log(content);
  }

  //静态方法
  sayHello(): void {
    console.log("Hello TypeScript!");
  }
}

export default Person;
