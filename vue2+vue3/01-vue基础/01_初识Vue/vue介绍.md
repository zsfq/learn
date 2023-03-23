# Vue简介

## 1.Vue是什么？

​	Vue是一套用于构建用户界面地渐进式JavaScript框架。vue可以自底向上逐层应用。对于一个==简单应用==来说，只需要引入一个轻量小巧的核心库即可。对于==复杂应用==来说，可以引入各式各样的vue插件。

## 2.Vue的特点

- 采用==组件化==模式，提高代码复用率、且让代码更好维护。
- ==声明式==编码，让编码人员无需直接操作DOM，提高开发效率。
- 使用==虚拟DOM==+优秀的==Diff算法==，尽量复用DOM节点。

## 3.Hello World示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>初识Vue</title>
    <!-- 引入vue -->
    <script type="text/javascript" src="./js/vue.js"></script>
</head>
<body>
    <!--
        初识Vue:
            1.想让Vue工作，首先就必须创建一个Vue实例。
            2.root容器中的代码依然符合html规范，只不过混入了一些特殊Vue语法
            3.root容器里的代码被称为【Vue模板】
            4.Vue容器和实例是一一对应的
            5.真实开发场景中只有一个Vue实例
            6.{{xxx}}中要使用的是js表达式，且xxx中可以自动读取到data中的所有属性
            7.一旦data的中数据发生变化，模板用到的地方也会自动更新
    -->
    <div id="root">
        <h1>Hello,{{name}}</h1>
    </div>
    <script type="text/javascript">
        //关闭生产环境提示
        Vue.config.productionTip = false;

        //创建Vue实例
        new Vue({
            el:"#root",         //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
            data:{              //data中用于存储数据，数据供el所指定的容器去使用
                name:'尚硅谷'
            }
        })
    </script>
</body>
</html>
```

