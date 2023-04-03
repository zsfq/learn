<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-02 13:46:05
 * @LastEditTime: 2023-04-02 16:30:43
 * @Description: APP.vue作为组件的顶级
-->
<template>
  <div>
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
//引入组件
import MySchool from './components/MySchool.vue'
import MyStudent from './components/MyStudent.vue'
export default {
    name:"App", 
    components:{
      MySchool,
      MyStudent
    }
}
</script>

<style>

</style>