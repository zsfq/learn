/*
 * @Author: 进阶滴小白
 * @Date: 2023-04-02 16:05:09
 * @LastEditTime: 2023-04-02 16:53:33
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * 关于不同版本的VUe: 
 *    1.vue.js与vue.runtime.xxx.js的区别：
 *        （1）vue.js是完整版的Vue,包含：核心功能 + 模板解析器
 *        （2）vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器
 * 
 *    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体的内容。
 */
new Vue({
  render: h => h(App),
}).$mount('#app')
