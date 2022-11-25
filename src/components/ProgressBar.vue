<template>
  <p class="progress-bar">Progress:{{ process }}% </p>
</template>

<script>


export default {
  name: 'Progressbar',
  computed: {
    process() {
      return Math.round(
          (this.$store.state.todos.filter(todo => todo.completed).length /
              this.$store.state.todos.length) * 100
      )
    }
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
