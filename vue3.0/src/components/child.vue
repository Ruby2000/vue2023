<template>
  <div class="child">
    <h2>我是子组件</h2>
    <p>父主键传递来的消息是{{{msg}}</p>
    <p>父主键传递来的消息是{{{name}}</p>
    <button @click="sendMsg"> 向父组件传递信息</button>

  </div>
</template>

<script>
export default {
  name: "child",
  // props:{
  //   msg:{
  //     type:String,
  //     default:''
  //   },
  //   name:{
  //     type:String,
  //     default: ''
  //   }
  // },
  mounted() {
    console.log(this);
  },
  methods:{
    sendMsg(){
      this.$emit("sendparentMsg",'通知父组件更新')
    }
  }
}
</script>

<style scoped>
.child{
  padding: 10px;
  background-color: orange;
}

</style>