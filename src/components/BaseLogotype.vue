<script>
export default {
	props: {
		color: {
			type: String,
			default: '#ffffff',
		},
	},
	name: 'BaseLogotype',
	computed: {
		styleObject: (vm) => ({
			color: vm.color,
		}),
	},
}
</script>

<template>
	<div :style="styleObject" class="logotype" v-wave>
		<img src="@/assets/logos/logo-white1-max.png" alt="" />
		<p class="logotype__icon">GGraph</p>
	</div>
</template>

<style scoped lang="scss">
img {
	height: 100%;
	padding: 10px;
	padding-left: 0px;
}

.logotype {
	height: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 0 10px;
	background-color: var(--accent-lighten);
	p {
		font-size: 21px;
		margin-top: 2px;
		text-shadow: -1px 2px 3px #08143ec9;
		color: white;
	}
}
</style>
