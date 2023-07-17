<template>
  <button @click="increment">{{ count }}</button>
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
    publishedBooksMessage(){
      return this.author.books.l
    }
 }
}


</script>

<style scoped>

</style>