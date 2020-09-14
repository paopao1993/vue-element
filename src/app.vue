<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from '@/components/login.vue'
// const Cookies = require('js-cookie')

export default {
//   beforeCreate() {
//     let userdata = Cookies.get('userdata')
//     if (!userdata) {
//        window.location.href = 'login.html'
//     }
//   },
  components: {
    Login
  }
}
</script>

<style lang="scss">
    html,body{
        height: 100%;
    }
</style>
