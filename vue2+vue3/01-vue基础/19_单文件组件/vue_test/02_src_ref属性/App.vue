<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-02 13:46:05
 * @LastEditTime: 2023-04-03 22:35:40
 * @Description: APP.vue作为组件的顶级
-->
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <MySchool ref="school"></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
//引入组件
import MySchool from './components/MySchool.vue'
import MyStudent from './components/MyStudent.vue'
export default {
    name:"App", 
    data(){
      return {
        msg:"欢迎学习Vue!"
      }
    },
    components:{
      MySchool,
      MyStudent
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title);     //真实DOM元素
        console.log(this.$refs.btn);       //真实DOM元素
        console.log(this.$refs.school);    //组件实例对象
      }
    }
}
</script>

<style>

</style>