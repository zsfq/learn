<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-06 23:11:50
 * @LastEditTime: 2023-04-06 23:16:57
 * @Description: 
-->
<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyFooter></MyFooter>
    <MyList></MyList>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue';
import MyList from './components/MyList.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
