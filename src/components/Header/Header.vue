<script setup lang="ts"></script>

<template>
	<v-app-bar color="primary" density="compact">
		<template v-slot:image>
			<v-img
				gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
			></v-img>
		</template>
		<template v-slot:prepend>
			<v-btn href="#/" replace :ripple="false">
				<img
					class="header_logo"
					src="../../assets/imgs/logo.webp"
					alt="Logo ABooks"
				/>
			</v-btn>
		</template>

		<v-btn href="#/" replace>Home</v-btn>
		<v-btn href="#/about" replace>about</v-btn>
		<v-btn href="#/about2" replace>about</v-btn>
		<v-btn href="#/non-existent-path" replace>Broken</v-btn>
	</v-app-bar>
</template>

<style lang="scss" scoped>
	.header_logo {
		max-height: 30px;
	}
</style>
