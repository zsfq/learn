<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-06 23:11:50
 * @LastEditTime: 2023-04-11 23:21:26
 * @Description: 
-->
<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter></MyFooter>
      </div>
    </div>
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
  },
  data(){
        return {
            todos:[
                {id:'0001',title:'吃饭',done:true},
                {id:'0002',title:'学习',done:false},
                {id:'0003',title:'睡觉',done:true}
            ]
        }
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj);
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-edit {
    color: #fff;
    background-color: lightgreen;
    border: 1px solid green;
    margin-right: 5px;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn-edit:hover {
    color: #fff;
    background-color: green;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
