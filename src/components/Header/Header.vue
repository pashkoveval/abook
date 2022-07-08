<script setup lang="ts"></script>

<template>
	<div class="app-header pt-5">
		<div class="app-header_logo">
			<app-link to="#/">
				<img
					class="app-header_logo-img"
					src="../../assets/imgs/logo.webp"
					alt="Logo ABooks"
				/>
			</app-link>
		</div>
		<divider />
		<app-link to="#/" text="Home" />
		<app-link to="#/about" text="about" />
		<app-link to="#/about2" text="about2" />
		<app-link to="#/non-existent-path" text="Broken" />
	</div>
</template>

<style lang="scss" scoped>
	.app-header {
		display: flex;
		align-items: center;
		height: 70px;
		width: 100%;
		padding: 8px;
		overflow: hidden;
		background: $second_green;
		box-shadow: inset -1px 1px 1px $main_green, 1px 1px 10px $main_green;
		&_logo {
			height: 100%;
			&-img {
				max-height: 50px;
			}
		}
	}
</style>
