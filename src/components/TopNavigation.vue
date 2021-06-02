<template>
	<nav class="top-navigation">
		<div class="top-navigation__outer">
			<div class="container container--mobile-specific">
				<div
					class="top-navigation__inner"
					:style="{
						paddingLeft: !$grid.laptop ? '0' : '10px',
						paddingRight: $grid.laptop ? '0' : '10px',
					}"
				>
					<div v-if="!$grid.laptop && login.isLoggedIn" class="top-navigation__left-mobile">
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
	--top-navigation-height: 54px;
	--top-navigation-color: var(--accent);
	height: var(--top-navigation-height);
	position: relative;
	z-index: 100;
	box-shadow: 0 5px 10px #2a57848a;
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
}

.top-navigation__right {
	color: white;
}

.top-navigation__left-desktop,
.top-navigation__left-mobile {
	height: 100%;
}
</style>
