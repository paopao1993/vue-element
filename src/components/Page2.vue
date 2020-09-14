<template>
    <div>
        <div>姓名</div>
        <el-input ref='input-user' v-model="userName" style="width: 200px" placeholder="请输入用户名" @keyup.enter.native="keyUp('input-user')" ></el-input>
        <div>性别</div>
        <el-input ref='input-sex' v-model="userSex" style="width: 200px" placeholder="请输入" @keyup.enter.native="keyUp('input-sex')" ></el-input>
        <div>工作</div>
        <el-input ref='input-work' v-model="userWork" style="width: 200px" placeholder="请输入" @keyup.enter.native="keyUp('input-work')" ></el-input>
        <div>电话</div>
        <el-input ref='input-phone' v-model="userPhone" style="width: 200px" placeholder="请输入" @keyup.enter.native="keyUp('input-phone')" ></el-input>
        <div>店铺</div>
        <el-autocomplete
                ref='input-shop'
                @keyup.enter.native="keyUp('input-shop')"
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
        ></el-autocomplete>
        <div>工号</div>
        <el-input ref='input-number' v-model="userNumber" style="width: 200px" placeholder="请输入" @keyup.enter.native="keyUp('input-number')" ></el-input>
        <div>身份证号</div>
        <el-input ref='input-ID' v-model="userID" style="width: 200px" placeholder="请输入" @keyup.enter.native="keyUp('input-ID')" ></el-input>
        <div>地址</div>
        <el-input ref='input-add' v-model="userAdd" style="width: 200px" placeholder="请输入" @keyup.enter.native="keyUp('input-add')" ></el-input>
    </div>
</template>

<script>
    export default {
        name: "page2",
        data() {
            return {
                userName: '',
                userSex:'',
                userWork:'',
                userPhone:'',
                userNumber:'',
                userID:'',
                userAdd:'',
                focusIndex:0,
                restaurants: [],
                state: '',
                timeout:  null
            }
        },
        methods:{
            keyUp(val){
                this.nextFocus(val,this.$refs)
            },
            loadAll() {
                return [
                    // { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    // { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    // { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    // { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    // { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    // { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "淘宝" },
                    { "value": "京东" },
                    { "value": "拼多多" },
                    { "value": "淘选购" },
                    { "value": "淘淘" },
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 300 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style scoped>

</style>