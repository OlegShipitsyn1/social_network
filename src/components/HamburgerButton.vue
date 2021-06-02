<template>
	<button v-wave @click="toggleMenu" :class="burgerClasses" aria-label="Главное меню" :aria-expanded="isOpened">
		<span class="burger-button__line"></span>
		<span class="burger-button__line"></span>
		<span class="burger-button__line"></span>
	</button>
</template>

<script>
export default {
	name: 'HamburgerButton',
	props: {
		size: Number,
	},
	emits: ['opening', 'closing'],
	data: () => ({
		isOpened: false,
	}),
	methods: {
		setIsOpened(state) {
			if (typeof state !== 'boolean') {
				throw new Error('Burger menu state must be boolean!')
			}
			this.isOpened = state
			this.$emit(state ? 'opening' : 'closing')
		},

		toggleMenu() {
			this.isOpened = !this.isOpened
			this.$emit(this.isOpened ? 'opening' : 'closing')
		},
	},
	computed: {
		burgerClasses: (vm) => ({
			'burger-button': true,
			'burger-button--opened': vm.isOpened,
		}),
	},
}
</script>

<style lang="scss">
.burger-button {
	box-sizing: content-box;
	border: none;
	cursor: pointer;
	display: inline-block;
	height: 40px;
	width: 40px;
	padding: 4px 7px;
	background: #00000014;
	color: white;
}

.burger-button__line {
	transition: 0.2s;
	display: block;
	height: 2px;
	background-color: white;
	& + & {
		margin-top: 7px;
	}
}
</style>
