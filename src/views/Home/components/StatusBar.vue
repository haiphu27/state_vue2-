<template>
	<div class="status-bar" >
		<p>Done</p>
		<ul v-if="isAuthenticated">
			<li  v-for="todo in doneTodos" :key="todo.id">
        {{todo.title}}
      </li>
		</ul>
	</div>
</template>

<script>
import {mapGetters } from "vuex";

export default {
	name: 'StatusBar',
  computed:{
    ...mapGetters({
      isAuthenticated:'isAuthenticated',
      doneTodos:'doneTodos'
    })
  },
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
