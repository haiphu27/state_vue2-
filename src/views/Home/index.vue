<template>
    <div>
      <h1>this is home</h1>
      <todos/>
      <status-bar/>
      <progress-bar/>
    </div>
</template>

<script>
import Todos from "@/views/Home/components/Todos";
import StatusBar from "@/views/Home/components/StatusBar";
import ProgressBar from "@/views/Home/components/ProgressBar";

export default{
  name:'home',
  components:{ProgressBar, StatusBar, Todos}
}
</script>

<style scoped>

</style>
