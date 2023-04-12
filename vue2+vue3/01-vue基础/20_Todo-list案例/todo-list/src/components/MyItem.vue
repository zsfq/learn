<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-06 23:13:34
 * @LastEditTime: 2023-04-12 23:02:02
 * @Description: 
-->
<template>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- 如下代码也能实现勾选和取消勾选的功能，但是不推荐使用，有点违反原则，修改了props -->
        <!-- <input type="checkbox" v-model="todo.done"> -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)"> 删除 </button>
    </li>
</template>
<script>
export default {
  name: "MyItem",
  props:['todo',"checkTodo","deleteTodo"],
  methods:{
    handleCheck(id){
      //通知APP组件将对应的todo对象修改
      this.checkTodo(id);
    },
    //删除
    handleDelete(id){
      if(confirm('确定删除吗？')){
        this.deleteTodo(id);
      }  
    }
  }
};
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
.todo-enter-active{
  animation: todo 0.5s linear;
}
.todo-leave-active{
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
