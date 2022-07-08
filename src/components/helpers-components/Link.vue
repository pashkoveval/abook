<template>
	<a :href="props.to" class="app-link">
		<slot> </slot>
		{{ props.text }}
	</a>
</template>

<script setup lang="ts">
	const props = defineProps({
		to: { type: String, required: true },
		text: String,
	});
</script>

<style lang="scss" scoped>
	.app-link {
		text-decoration: none;
		margin: 0 8px;
		color: $main_green;
		&:visited {
			color: $main_green;
		}
	}
</style>
