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
	<div :style="styleObject" class="logotype">
		<p class="logotype__icon">Logotype</p>
	</div>
</template>
