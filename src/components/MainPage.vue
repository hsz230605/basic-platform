<template>
  <div>
    <div class="header_">
      <header-menu></header-menu>
    </div>
    <!--<router-view/>-->
    <div class="container_" style="position: absolute;">
      <div class="left_" style="float: left;width: 320px;">
        <sideMenu></sideMenu>
      </div>

      <div class="right_" style="background-color: #913d99;margin-left: 320px;">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <!--<main-menu></main-menu>-->
          <!--<map-view></map-view>-->
          <router-view/>
          <!--<map-view></map-view>-->
          <!--<router-view/>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headerMenu from '@/components/HeaderMenu'
  import sideMenu from '@/components/sideMenu'
export default {
    components:{
    headerMenu,sideMenu
  }
}
</script>
<style>
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
  @import '../../node_modules/material-design-lite/material.min.css';

  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }


  @media screen and (min-width: 1024px) {
    .container_{
      top: 64px;
      width: 100%;
      color: #fff;
      height: 100%;
    }
    .left_,.right_{
      height: calc(100% - 64px);
    }

  }

  @media screen and (max-width: 1024px) {
    .container_{
      top: 56px;
      width: 100%;
      height: 100%;
      color: #fff;
    }

    .left_,.right_{
      height: calc(100% - 56px);
    }
  }
</style>
