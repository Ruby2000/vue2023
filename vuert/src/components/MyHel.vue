<template>
<button @click="show = !show">Tiggle</button>
  <Transition class="a">
    <p v-if="show">hello</p>
  </Transition>
<p @click="trick =!trick">toggle slide + fade
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>
</p>
</template>

<script>
export default {
  data(){
    return{
      show: true,
      trick: true
    }
  }

}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>