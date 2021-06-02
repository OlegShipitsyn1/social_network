<script>
import TopNavigation from '@/components/TopNavigation.vue'
import BaseModal from './components/BaseModal.vue'
import LoginForm from './components/LoginForm.vue'

export default {
	components: { TopNavigation, BaseModal, LoginForm },
}
</script>

<template>
	<div id="application">
		<base-modal clr="red" maxWidth="400px" ref="enterModal" title="Вход в систему">
			<login-form />
		</base-modal>
		<div class="layout">
			<top-navigation @entering="$refs.enterModal.setModalVisibility(true)" />
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
@import 'global_styles/base';
#application {
	--accent: hsla(210, 52%, 34%, 1);
	--accent-lighten: hsla(210, 52%, 40%, 1);
	--text-shadow: #00000038;
	--app-background: #edeef0;
}
.layout {
	display: grid;
	background-color: var(--app-background);
	min-height: 100vh;
	grid-template-rows: auto 1fr;
}
</style>
