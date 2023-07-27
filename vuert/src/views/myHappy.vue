<template>
<div>

  <MyCar/>
  <MyApod/>
</div>
  <button>
    <router-link to="/">
      返回首页
    </router-link>
  </button>
  <QueStion/>
  <MyHel/>
  <myCss/>
   <button>
     <router-link to="/1">下一页</router-link>
   </button>
</template>

<script>

import MyCar from "@/components/MyCar";
import MyApod from "@/components/MyApod";
import QueStion from "@/components/QueStion";
import MyHel from "@/components/MyHel";
import myCss from "@/components/myCss";
export default {
  name: "myHappy",
  components: {MyHel, QueStion, MyApod, MyCar,myCss},
}
</script>

<style scoped>

</style>