//在定义函数或者类时，如果遇到类型不明确就可以使用泛型
function fn<T>(arg: T): T {
  return arg;
}
fn(10); //可以直接调用，实际上是语言做了自动推断
fn<string>("hello"); //指定泛型为string

//泛型也可以执行多个
function fn2<K, T>(a: K, b: T): T {
  return b;
}
fn2<number, string>(12, "hello");

interface Inter {
  length: number;
}
function fn3<T extends Inter>(a: T): number {
  //此处的泛型为Inter的子类
  return a.length;
}
fn3({ length: 23 });
