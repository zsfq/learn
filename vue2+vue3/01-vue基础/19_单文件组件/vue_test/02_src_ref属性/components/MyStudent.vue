<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-02 13:31:32
 * @LastEditTime: 2023-04-02 16:30:20
 * @Description: 
-->
<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄{{ age }}</h2>
  </div>
</template>

<script>
//组件相关的代码、数据
export default{
    name:"MyStudent",
    data(){
        return {
            name:"张三",
            age:18
        }
    },
}
</script>
