<template>
  <p v-if="isAuthenticated" class="progress-bar">Progress:{{ process }}% </p>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Progressbar',
  computed: {
    ...mapGetters({
      process:'progress',
      isAuthenticated:'isAuthenticated'
    }),
  }
}
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(111, 117, 111);
  color: black;
}
</style>
