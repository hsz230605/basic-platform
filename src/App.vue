<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header-menu></header-menu>
    <!-- <main-menu></main-menu> -->
    <!-- <map-view></map-view> -->
    <router-view/>
    </div>
  </div>
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import mainMenu from '@/components/mainMenu'
import MapView from '@/components/MapView'
import headerMenu from '@/components/HeaderMenu'
export default {
  name: 'app',
  components:{
    mainMenu,MapView,headerMenu
  }
}
</script>


<style>

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@import '../node_modules/material-design-lite/material.min.css';

</style>
