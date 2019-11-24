<template>
    <el-container>
        <el-header>
            <mainnav></mainnav>
        </el-header>

        <el-main>
            <mainbox></mainbox>
        </el-main>

        <el-footer>
            <mainfoo></mainfoo>
        </el-footer>
    </el-container>
</template>


<script>
import Mainnav from './components/Mainnav.vue'
import Foo from './components/Footer.vue'
import Content from './components/Content.vue'


export default {
    name: 'app',
    components: {
        'mainnav': Mainnav,
        'mainfoo': Foo,
        'mainbox': Content
    }
}
</script>


<style scoped>
#mainnav {
    margin-bottom: 20px;
}
</style>
