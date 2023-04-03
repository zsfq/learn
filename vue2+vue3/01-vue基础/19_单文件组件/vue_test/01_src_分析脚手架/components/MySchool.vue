<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-02 13:31:32
 * @LastEditTime: 2023-04-02 13:40:07
 * @Description: 
-->
<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="hello">点我提示弹窗</button>
  </div>
</template>

<script>
//组件相关的代码、数据
export default{
    name:"MySchool",
    data(){
        return {
            name:"清华",
            address:"北京"
        }
    },
    methods:{
        hello(){
            alert("Hello ");
        }
    }
}
</script>

<style>
/* 组件样式 */
.demo {
    background-color: pink;
}
</style>
