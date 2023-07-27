<template>
<div>
  <h2>
    调用axios接口页面
  </h2>
  <button @click="gatdata">点我看火星小车图</button>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: "MyCar",
  methods:{
    gatdata(){
      axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY",{
        params:{
          sol:10,
          api_key: 'DEMO_KEY'
        }
      })
      .then(response => {
        const photos = response.data.photos;
        const photo = photos[0];
        const img = document.createElement('img');
        img.src = photo.img_src;
        document.body.appendChild(img);
      })
      .catch(error =>{
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