<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            stripe
            border
            style="width: 100%;">
        <el-table-column
                fixed
                prop="name"
                align="center"
                label="姓名">
        </el-table-column>
        <el-table-column
                prop="sex"
                align="center"
                label="性别">
        </el-table-column>
        <el-table-column
                prop="age"
                align="center"
                label="年龄">
        </el-table-column>
        <el-table-column
                prop="phone"
                align="center"
                label="联系方式">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                align="center"
                width="400">
        </el-table-column>
        <el-table-column
                prop="job"
                align="center"
                label="职务">
        </el-table-column>
        <el-table-column
                align="center"
                width="200">
            <template slot="header" slot-scope="scope">
                <el-input
                        v-model="search"
                        size="small"
                        placeholder="输入姓名"/>
            </template>
            <template slot-scope="scope">
                <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">操作</el-button>
                <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "page1",
        data() {
            return {
                tableData: [{
                    name: '李一',
                    sex: '男',
                    age: '21',
                    phone: '15423666999',
                    address: '北京市天通苑天通苑小区115号',
                    job:'会计'
                }, {
                    name: '张三',
                    sex: '男',
                    age: '23',
                    phone: '15423685429',
                    address: '北京市西二旗生活区生活广场13-12',
                    job:'销售'
                }, {
                    name: '李莉',
                    sex: '女',
                    age: '29',
                    phone: '15423666630',
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'客服'
                }, {
                    name: '李一',
                    sex: '男',
                    age: '21',
                    phone: '15423666999',
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'会计'
                }, {
                    name: '李一',
                    sex: '男',
                    age: '21',
                    phone: '15423666999',
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'会计'
                }, {
                    name: '李一',
                    sex: '男',
                    age: '21',
                    phone: '15423666999',
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'会计'
                }, {
                    name: '李一',
                    sex: '男',
                    age: '21',
                    phone: '15423666999',
                    address: '上海市普陀区金沙江路 1518 弄',
                    job:'会计'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
    }
</script>