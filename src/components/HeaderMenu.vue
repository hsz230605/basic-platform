<template>
  <div>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Title</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
      </header>

      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    </div>

    <!--<el-menu-->
      <!--:default-active="activeIndex2"-->
      <!--class="el-menu-demo"-->
      <!--mode="horizontal"-->
      <!--@select="handleSelect"-->
      <!--background-color="#545c64"-->
      <!--text-color="#fff"-->
      <!--active-text-color="#ffd04b">-->
      <!--<el-menu-item index="1">项目概览</el-menu-item>-->
      <!--<el-menu-item index="2"><a  target="_blank">项目详情</a></el-menu-item>-->
      <!--<el-submenu index="3" class="right">-->
        <!--<template slot="title">我的工作台</template>-->
        <!--<el-menu-item index="3-1">用户中心</el-menu-item>-->
        <!--<el-menu-item index="3-2">登出</el-menu-item>-->
      <!--</el-submenu>-->
    <!--</el-menu>-->

  </div>
</template>
<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--activeIndex: '1',-->
        <!--activeIndex2: '1'-->
      <!--};-->
    <!--},-->
    <!--methods: {-->
      <!--handleSelect(key, keyPath) {-->
        <!--console.log(key, keyPath);-->
        <!--if(key==1){-->
          <!--this.$router.replace('/selectmenu')-->
          <!--return-->
        <!--}else if(key ==2){-->
          <!--this.$router.replace('/map')-->
          <!--return-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--.right{-->
  <!--float:right;-->
<!--}-->
<!--</style>-->
