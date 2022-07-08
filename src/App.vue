<script setup lang="ts">
	import appHeader from './components/Header/Header.vue';

	import { ref, onMounted } from 'vue';
	const show = ref(false);
	const update = () => {
		show.value = true;
	};
	onMounted(() => {
		update();
	});
</script>

<template>
	<v-app>
		<appHeader />
		<v-main>
			<router />
		</v-main>
	</v-app>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		/* margin-top: 60px; */
		height: 100vh;
		overflow: hidden;
	}
	// @import url('./assets/styles/main.scss');
	// @import url('./assets/styles/main.sass');
</style>
