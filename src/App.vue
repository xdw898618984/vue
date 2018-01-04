<template>
  <div id="app">
     <div id="nav"> <div class="music_logo">QQ音乐</div>
     <a href="javascript:;" class="btn_download">下载APP</a></div>
  
  <div class="header">
  <div> 
   <router-link to="/recommend">  推荐</router-link>  
  </div>
  <div>
    
    <router-link to="/ranking">  排行榜</router-link>  
    </div>
  <div>
   
    <router-link to="/seek">  搜索</router-link>  
    </div>
  </div>


    <router-view/>
  
  </div> 
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#app #nav {
  background-color: aquamarine;
  height: 50px;
}
#app #nav .music_logo {
  color: aliceblue;
  line-height: 30px;
  height: 30px;
  width: 100px;
  background: #149c5a;
  float: left;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 99px;
}
#app #nav .btn_download {
  position: absolute;
  display: inline-block;
  right: 10px;
  top: 8px;
  height: 28px;
  padding: 0 12px;
  line-height: 28px;
  border-radius: 99px;
  font-size: 14px;
  background: #149c5a;
  color: #fff;
  text-decoration: none;
}
#app .header{
  display: flex
}

#app .header div{
float: left;
flex:1;
margin: 10px 0 10px 0;
font-size: 20px;


}
</style>
