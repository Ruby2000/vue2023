<template>
  <div class="about">

    <h2>注册页面</h2>
    <Sign_in/>
    <button>
      <router-link to="/" >返回登录</router-link>
    </button>
    <button>
      注册
    </button>

  </div>
</template>
<script>
import Sign_in from "@/components/sign_in";
export default {
  components: {Sign_in}
}
</script>