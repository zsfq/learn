<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-06 23:13:34
 * @LastEditTime: 2023-04-11 22:51:18
 * @Description: 
-->
<template>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done"/>
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger"> 删除 </button>
    </li>
</template>
<script>
export default {
  name: "MyItem",
  props:['todo']
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
