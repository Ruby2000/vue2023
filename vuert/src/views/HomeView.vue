<template>
  <div class="home">
    <h2>登录页面</h2>
    <Sign_in/>
    <button>
       登录
    </button>
   <button>
     <router-link to="/about">注册</router-link>
   </button>
    <button>
      <router-link to="/happy">去其他页</router-link>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

import Sign_in from "@/components/sign_in";

export default {
  name: 'HomeView',
  components: {
    Sign_in,
  }
}
</script>
