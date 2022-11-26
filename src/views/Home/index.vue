<template>
    <div>
      <h1>this is home</h1>
      <navbar/>
      <todos/>
      <status-bar/>
      <progress-bar/>
    </div>
</template>

<script>
import Navbar from'@/components/Navbar'
import Todos from "@/components/Todos";
import StatusBar from "@/components/StatusBar";
import ProgressBar from "@/components/ProgressBar";

export default{
  name:'home',
  components:{ProgressBar, StatusBar, Todos, Navbar}
}
</script>

<style scoped>

</style>
