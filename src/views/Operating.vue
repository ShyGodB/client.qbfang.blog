<template>
    <el-row class="w-100">
        <el-col :span="4">
            <operating-nav></operating-nav>
        </el-col>

        <el-col :span="20" v-if="tab==='order'">
            <operating-order></operating-order>
        </el-col>

        <el-col :span="20" v-if="tab==='user'">
            <operating-user></operating-user>
        </el-col>
    </el-row>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'
import Nav from '../components/operating/Nav.vue'
import Order from '../components/operating/Order.vue'
import User from '../components/operating/User.vue'

export default {
    name: 'Operating',
    components: {
        "operating-nav": Nav,
        "operating-order": Order,
        "operating-user": User
    },
    data() {
        return {
            tab: 'order'
        };
    },
    methods: {
        changeRoute() {
            const tab = this.$route.params.tab;
            this.tab = tab;
        }
    },
    watch: {
        "$route": "changeRoute",
    }
}
</script>


<style scoped>
#god, #boss {
    margin-top: 20px;
}
.register {
    width: 60%;
    min-height: 500px;
    margin: 40px auto 0;
}
.register .register-body {
    margin-top: 40px;
}
</style>
