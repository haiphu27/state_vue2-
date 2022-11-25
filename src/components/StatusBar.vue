<template>
	<div class="status-bar" >
		<p>Done</p>
		<ul>
			<li v-for="todo in todos" :key="todo.id">
        {{todo.title}}
      </li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'StatusBar',
  computed:{
    todos(){
      return this.$store.state.todos.filter(t=>t.completed===true)
    }
  }
}
</script>

<style>
.status-bar {
	padding: 5px;
	text-align: center;
	background: rgb(240, 240, 240);
	color: black;
}
</style>
