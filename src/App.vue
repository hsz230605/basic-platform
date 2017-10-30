<template>
  <div id="app">
    <router-view></router-view>
    
    <!-- <header-menu></header-menu> -->
    <!-- <router-view/>   -->
  </div>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
// import mainMenu from '@/components/mainMenu'
// import MapView from '@/components/MapView'
// import headerMenu from '@/components/HeaderMenu'
// import loginContent from '@/components/loginContent'
export default {
  name: 'app'
}
</script>


<style>

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import '../node_modules/material-design-lite/material.min.css';
html,body{margin: 0;
padding: 0;
height:100%;}
#app{
  width: 100%;
  height: 100%;
}
</style>
