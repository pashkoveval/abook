<template>
	<Transition name="fade">
		<perfect-scrollbar>
			<div class="container mt-5">
				<slot v-if="show"></slot>
			</div>
		</perfect-scrollbar>
	</Transition>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	const show = ref(false);
	const update = () => {
		show.value = true;
	};
	onMounted(() => {
		update();
	});
</script>

<style lang="scss" scoped>
	.ps {
		height: calc(100vh - 70px);
	}
</style>
