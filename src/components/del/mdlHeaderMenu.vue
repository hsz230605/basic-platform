<template>
  <div>
<!-- Always shows a header, even in smaller screens. -->
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
  <main class="mdl-layout__content">
    
    <div class="page-content"><!-- Your content goes here --></div>

  </main>
</div>
  </div>
</template>
<script>
export default {
  mounted(){
   var o = document.getElementsByClassName("mdl-layout__content");
   var h = o[0].clientHeight; //高度
   console.log(o)
   console.log(h)
  }
}
</script>

<style scoped>
#mdl-layout__header{
  height:100px !important;
}
#maptest{
  position: relative;
  left:0;
  top:0;
  bottom: 0;
  height: 100%;
}
</style>
