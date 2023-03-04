//通常类中会存在一些属性，但是针对一些应用场景。直接访问属性会造成数据不安全
class Person {
  //声明私有属性
  public _name: string;
  private _age: number;

  //可以在内部对属性进行获取或修改，暴露对外的方法
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  //使用get、set方法看似麻烦，但是也能解决一些问题，比如在访问前对数据进行校验
  //js中的常规写法
  //   getName() {
  //     return this.name;
  //   }
  //   setName(name: string) {
  //     this.name = name;
  //   }

  //   getAge() {
  //     return this.age;
  //   }

  //   setAge(age: number) {
  //     this.age = age;
  //   }

  //ts中getter、setter

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }
  set age(age: number) {
    this._age = age;
  }
}

// let p = new Person();
// p.name = "张三";         //属性“name”为私有属性，只能在类“Person”中访问。
let p = new Person("zhangsan", 12);
console.log(p.name);
console.log(p.age);
p.name = "lisi";
p.age = 23;
console.log(p);       //Person { _name: 'lisi', _age: 23 }
