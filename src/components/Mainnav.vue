<template>
    <div id="mainnav">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-menu :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    text-color="#000000"
                    @select="handleSelect">
                        <el-menu-item index="1" class="f-left">
                            <router-link to="/">主页</router-link>
                        </el-menu-item>

                        <el-menu-item index="2" class="f-left">
                            <router-link to="/operating/order">运营管理</router-link>
                        </el-menu-item>

                        <el-menu-item index="3" class="f-left">
                            <router-link to="/settle">结算中心</router-link>
                        </el-menu-item>

                        <el-menu-item index="4" class="f-left">
                            <router-link to="/data">数据分析</router-link>
                        </el-menu-item>

                        <el-menu-item index="5" class="f-left">
                            <router-link to="/setting">系统设置</router-link>
                        </el-menu-item>

                        <el-menu-item index="6" class="f-right">
                            退出
                        </el-menu-item>

                        <el-menu-item index="7" class="f-right">
                            管理员：测试F
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name: 'mainnav',
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created() {

    }
}
</script>


<style scoped>

</style>
