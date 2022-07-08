<script>
	import Home from '../view/Home.vue';
	import About from '../view/About.vue';
	import NotFound from '../view/NotFoundView.vue';

	const routes = {
		'/': Home,
		'/about': About,
	};

	export default {
		data() {
			return {
				currentPath: window.location.hash,
			};
		},
		computed: {
			currentView() {
				return routes[this.currentPath.slice(1) || '/'] || NotFound;
			},
		},
		mounted() {
			window.addEventListener('hashchange', () => {
				this.currentPath = window.location.hash;
			});
		},
	};
</script>

<template>
	<component :is="currentView" />
</template>
