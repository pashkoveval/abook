<template>
	<view-body>
		<div>home</div>
	</view-body>
</template>

<script>
	import { nextTick } from 'vue';
	export default {
		data() {
			return {
				show: false,
			};
		},
		mounted() {
			nextTick(() => {
				this.show = true;
			});
		},
	};
</script>

<style lang="scss" scoped></style>
