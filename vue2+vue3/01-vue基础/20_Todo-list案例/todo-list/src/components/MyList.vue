<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-06 23:13:34
 * @LastEditTime: 2023-04-12 23:01:20
 * @Description: 
-->
<template>
    <ul class="todo-main">
      <MyItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj" 
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
    </ul>
</template>
<script>
import MyItem from './MyItem.vue';
export default{
    name:"MyList",
    components:{
        MyItem
    },
    props:['todos',"checkTodo","deleteTodo"]
}
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>