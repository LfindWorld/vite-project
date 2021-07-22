<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="@/assets/images/but.jpg">

    <el-button @click="addCount">增加vuex</el-button>
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

function add () {
  const count = ref(0)
  const addCount = () => {
    count.value++
  }
  return {
    count,
    addCount
  }
}
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    return {
      ...add()
    }
  }
})
</script>

<style lang="scss" scoped>
  .home {
    padding: 0 30px;
  }
  .img {
    width: 320px;
    display: block;
    margin: 0 auto;
  }
</style>
