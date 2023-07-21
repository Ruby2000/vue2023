<template>
  <div class="inS">
    <h1>V3</h1>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄:{{ person.age }}</h3>
    <h3>工作经验:{{ person.work.j1.jname }}</h3>
    <h3 v-if="person.like">爱好:{{ person.like }}</h3>
    <button @click="person.name += '-'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.work.j1.jname += '!'" >修改工作</button>
    <button @click="add">增加爱好</button>
    <button @click="deleteHB" >删除爱好</button>
  </div>
</template>

<script >
export default {
  name: "child5",
  data(){
    return {
      person:{
        name:"name"
      }
    }
  },
  created() {
    this.person = {
      name:'张三',
      age:12,
      work: {
        j1: {
          jname: '前端开发',
        },
      },

    }
    console.log("---------")
  },
  methods:{
    add(){
         this.person.like=['唱', '跳', 'rap']
    },
    deleteHB(){
      delete this.person.like

    }
  }
}

</script>

<style scoped>
.inS{
  background-color: slateblue;
}
</style>