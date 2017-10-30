<template>
  <div>
    <header-menu></header-menu>
    <router-view/>  
  </div>
</template>

<script>
import headerMenu from '@/components/HeaderMenu'
export default {
    components:{
    headerMenu
  }
}
</script>