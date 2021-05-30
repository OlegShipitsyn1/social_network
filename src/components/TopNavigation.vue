<template>
	<nav class="top-navigation">
		<div class="top-navigation__outer">
			<div class="container container--mobile-specific">
				<div class="top-navigation__inner">
					<div v-if="!$grid.laptop" class="top-navigation__left-mobile">
						<hamburger-button />
						<base-logotype />
					</div>
					<div v-else class="top-navigation__left-desktop">
						<base-logotype />
					</div>

					<div class="top-navigation__right">
						<div v-if="login.isLoggedIn" class="top-navigation__user">
							<p>User</p>
						</div>
						<div v-else class="top-navigation__enter">
							<base-button @click="$emit('entering')" boxShadow="none" backgroundColor="hsla(210, 52%, 39%, 1)">
								Войти
							</base-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import BaseLogotype from './BaseLogotype.vue'
import HamburgerButton from './HamburgerButton.vue'
import { mapState } from 'vuex'
import BaseButton from './BaseButton.vue'

export default {
	name: 'TopNavigation',
	emits: ['entering'],
	components: { HamburgerButton, BaseLogotype, BaseButton },
	computed: mapState(['login', ['isLoggedIn']]),
}
</script>

<style lang="scss">
.top-navigation {
	--top-navigation-height: 48px;
	--top-navigation-color: var(--accent);
	height: var(--top-navigation-height);
}

.top-navigation__outer {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: var(--top-navigation-height);
	background-color: var(--top-navigation-color);
}

.top-navigation__inner {
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-between;
}

.top-navigation__left-mobile {
	display: flex;
	align-items: center;
	gap: 10px;
}

.top-navigation__right {
	color: white;
	padding-right: 10px;
	@include laptop {
		padding-right: 0;
	}
}
</style>
