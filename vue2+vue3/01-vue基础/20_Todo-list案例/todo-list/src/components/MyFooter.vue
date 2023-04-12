<!--
 * @Author: 进阶滴小白
 * @Date: 2023-04-06 23:13:34
 * @LastEditTime: 2023-04-12 23:38:59
 * @Description: 
-->
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 第一种实现全选 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成 {{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props:["todos","checkAllTodo","clearAllTodo"],
  computed:{
    total(){
      return this.todos.length;
    },
    doneTotal(){
      //第一种写法
      // this.todos.reduce((pre,current) => {
      //   return pre + (current.done ? 1 : 0);
      // },0) 

      //简便写法
      return this.todos.reduce((pre,current) => pre + (current.done ? 1 : 0),0);
    },
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value){
        this.checkAllTodo(value);
      }
      
    }
  },
  methods:{
    // checkAll(event){
    //   this.checkAllTodo(event.target.checked);
    // }
    clearAll(){
      this.clearAllTodo()
    }
  }
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
