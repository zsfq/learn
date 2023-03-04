/*
 * @Author: 进阶滴小白
 * @Date: 2023-03-04 17:41:21
 * @LastEditTime: 2023-03-04 17:47:07
 * @Description:
 */
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};

console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);

//实现接口
class Coder implements IPerson {
  firstName: string;
  lastName: string;
  sayHi(): string {
    return "实现接口中的sayHi（）方法";
  }
}