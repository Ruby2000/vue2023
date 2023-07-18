<template>
  <p>Has publicshed books:</p>
  <span>{{ author.books.length > 0 ? 'Yes': 'No'}}</span>
</template>

<script>
export default {
  data(){
    return{
      author: {
        name: 'John Doe',
        books: [
            'vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
      }
    }
  },
 computed: {
    //一个计算属性的getter
    publishedBooksMessage() {
       //'this'指出当前组件实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
 }
}
</script>

<style scoped>

</style>