<template>
	<form @submit="onSubmit">
		<input type="text" v-model="title" />
		<input type="submit" value="Add" @click.prevent="onSubmit()" />
	</form>
</template>

<script>
import { v4 as uuidv4 }  from "uuid";
import {mapActions} from "vuex";

export default {
	name: 'TodoForm',
	data() {
		return {
			title: ''
		}
	},
	methods: {
     ...mapActions(['addJob']),
      onSubmit() {
        this.addJob({
          id:uuidv4(),
          title: this.title,
          completed:false
        })
        this.title=''
      }
	}
}
</script>

<style>
form {
	padding: 10px;
}

input[type='text'] {
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	margin: 6px 0;
	border: 0;
}

input[type='submit'] {
	margin: 10px auto;
	padding: 10px;
	border: 0;
	display: block;
}
</style>
