/*
 * @Author: 进阶滴小白
 * @Date: 2023-03-04 17:24:37
 * @LastEditTime: 2023-03-04 17:34:10
 * @Description:
 */
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract eat(): void;          //抽象类中可以添加抽象方法,在子类中必须实现抽象方法
}

class Dog extends Animal{
    eat(): void {
        console.log("狗在叫！");
    }
}

// Animal animal = new Animal();    //无法创建抽象类的实例