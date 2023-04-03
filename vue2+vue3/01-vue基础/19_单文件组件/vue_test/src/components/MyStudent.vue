<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-02 13:31:32
 * @LastEditTime: 2023-04-03 23:17:08
 * @Description: 
-->
<template>
  <!-- 组件的结构 -->
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="myAge++">点击年龄 + 1</button>
  </div>
</template>

<script>
//组件相关的代码、数据
export default{
    name:"MyStudent",
    data(){
        return {
            msg:"我是一个学生",
            myAge:this.age
        }
    },
    //1.简单方式接收
    //props:['name','sex','age']      

    //2.接收的同时对类型进行限制
    /*
      props:{
        name:String,
        sex:String,
        age:Number
      }
    */

    //3.接收的同时对类型进行限制 + 默认值设定 + 必要性限制
    props:{
      name:{
        type:String,   //name的类型是字符串
        required:true    //name是必要的
      },
      age:{
        type:Number,
        default:35
      },
      sex:{
        type:String,
        required:true
      }
    }
}
</script>
