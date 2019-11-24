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
                            半世浮尘半世缘
                        </el-menu-item>

                        <el-menu-item index="2" class="f-left">
                            <router-link to="/">主页</router-link>
                        </el-menu-item>

                        <el-menu-item index="3" class="f-left">
                            <router-link to="/register">分类</router-link>
                        </el-menu-item>

                        <el-menu-item index="4" class="f-left">
                            <router-link to="/bosshome">标签</router-link>
                        </el-menu-item>

                        <el-menu-item index="5" class="f-left">
                            <router-link to="/userhome">生活</router-link>
                        </el-menu-item>

                        <el-menu-item index="6" class="f-right">
                            <router-link to="/result/电脑/complex">关于</router-link>
                        </el-menu-item>

                        <el-menu-item index="7" class="f-right">
                            <router-link to="/userinfo">Github</router-link>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    inject: ['reload'],
    name: 'mainnav',
    props: ['user'],
    data() {
        return {
            search: '123123',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        logout() {
            this.$session.destroy();
            if (this.$session.exists()) {
                this.user.hasUser = true;
            } else {
                this.user.hasUser = false;
            }
            this.$router.push('/login');
        }
    },
    created() {
        if (this.$session.exists()) {
            this.user.hasUser = true;
        } else {
            this.user.hasUser = false;
        }
    }
}
</script>


<style scoped>
#mainnav .f-left {
    float: left;
}

#mainnav .f-right {
    float: right;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
.line {
    display: inline-block;
}
</style>
