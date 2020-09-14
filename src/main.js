import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import router from './router/index'
import utils from '@/common/utils'
import './theme/element-variables.scss'


Vue.use(ElementUI)
Vue.use(utils)
// 注册一个全局自定义指令 `v-focus`
Vue.directive('checkFocus', {
    // 当被绑定的元素插入到 DOM 中时……
    // inserted: function (el,obj) {
    //   // 聚焦元素
    //   if(obj.value){
    //     if(el.children[0]){
    //         el.children[0].focus()
    //     }else{
    //         console.log(el);
    //         el.focus()
    //     }
    // }
    // },
    //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated:function(el,obj){
        console.log(obj)
        if(obj.value){
            if(el.children[0]){
                el.children[0].focus()
            }else{
                console.log(el);
                el.focus()
            }
        }
    }
  })
new Vue({
    el: '#app',
    router,
    //render: h => h(Navi)
    render: h => h(App)
})
