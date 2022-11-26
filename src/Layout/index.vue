<template>
  <div>
    <div>
      <navbar/>
    </div>
    <app-main/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import AppMain from "@/components/AppMain";

export default {
  components: {AppMain, Navbar}
}
</script>

<style scoped>

</style>
