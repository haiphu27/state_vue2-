<template>
	<div class="navbar">
		<h1>My Vuex App Todos</h1>
		<ul>
			<li>Home</li>
			<li>About</li>
			<li v-if="auth.isAuthenticated">
        Total todos: {{todos.length}}
        <button>Log out</button>
      </li>

      <button v-else>Log in</button>

		</ul>
	</div>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: 'Navbar',
  computed:mapState(['todos','auth'])
}
</script>

<style>
.navbar {
	padding: 5px;
	text-align: center;
	background: rgb(240, 240, 240);
	color: black;
}

.navbar ul {
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	padding: 0;
}
</style>
