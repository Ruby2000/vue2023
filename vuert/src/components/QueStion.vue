<template>
<div>
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
</div>
</template>

<script>
export default {
  name: "QueStion",
  data(){
    return{
      question:'',
      answer:'Questions usually contain a question mark. ;-)'
    }
  },
  watch:{
    //每当question改变时，这个函数就会执行
     question(newQuestion,){
       if(newQuestion.includes('?')){
         this.getAnswer()
       }
     }
  },
  methods:{
    async getAnswer(){
      this.answer = 'Thinking...'
      try{
        const  res = await fetch('https://yesno.wtf/api')
        this.answer = (await  res.json()).answer
      }catch (error){
        this.answer = 'Error! Could not reach the API.' + error
      }
    }
  }
}
</script>

<style scoped>

</style>