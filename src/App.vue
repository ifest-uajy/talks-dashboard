<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar }
}
</script>
