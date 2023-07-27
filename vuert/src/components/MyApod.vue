<template>
  <button @click="gatbata">点我看星系图</button>
</template>

<script>
import axios from "axios"
export default {
  name: "MyApod",
  methods:{
    gatdata(){
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",{
        params:{
          count:10,
          api_key:'DEMO_KEY'
        }
      })
      .then(response => {
        const photos = response.data.photos;

        const photo = photos[0];
        const img =document.createElement('img');
        img.src = photo.img_src;
        document.body.appendChild(img);
      })
      .catch(error => {
          console.error(error);
      })
    }
  }
}
</script>

<style scoped>
button{
  padding: 10px;
}
.sy1{
  width: 100%;
  text-align: center;
}
.sy2{
  height: 49px;
}
.sy3{
  background-color: unset;
  border: none;
}
</style>