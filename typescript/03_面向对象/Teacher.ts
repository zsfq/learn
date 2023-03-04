import Person from "./Person";

class Teacher extends Person {
  teachTime: number; //teacher类的属性

  constructor(name: string, age: number, teachTime: number) {
    super(name, age); //借助父类构造器
    this.teachTime = teachTime;
  }
  teach() {
    //特有方法
    console.log("开始上课！");
  }

  sayHello(): void {
    //重写父类方法
    console.log("Hello! I'm a teacher.");
  }
}

let mathTeacher = new Teacher("张三", 24, 3); //叫张三的老师，今年24，当了3年老师了
mathTeacher.say("mathTeacher");
mathTeacher.sayHello();
mathTeacher.teach();
