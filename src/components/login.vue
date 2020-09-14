<template>
    <div class="login">
        <div class="bg">

        </div>
        <div class="loginList">
            <el-input ref='input-user' v-model="userName" style="width: 200px" placeholder="请输入用户名" @keyup.enter.native="keyUp('input-user')" ></el-input>
            <el-input ref='input-pwd' v-model="passWord" style="width: 200px" placeholder="请输入密码" show-password @keyup.enter.native="keyUp('input-pwd')"></el-input>
            <el-button  type="primary" style="width: 100px" round @click="toLogin">登录</el-button>
        </div>
        <!-- <input  v-focus type="text"> -->
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userName: '',
                passWord: '',
                focusIndex:0
            }
        },
        methods:{
            keyUp(val){
                this.nextFocus(val,this.$refs)
            },
            toLogin(){
                this.$router.push('Navi')
            }
        }
    }
</script>

<style scoped lang="scss">
    html{
        height: 50px;
    }
    // .loginList{
    //     background: cadetblue;
    //     width: 400px;
    //     height: 700px;
    // }
</style>