<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <el-row>
      <el-button type="danger" @click="handleIncrease">增加</el-button>
    </el-row>
    <h2>我是组件</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const count = ref(0)
    return {
      count,
      handleIncrease: () => {
        count.value++
      }
    }
  }
})
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
