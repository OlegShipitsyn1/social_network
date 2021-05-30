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
		<top-navigation @entering="$refs.enterModal.setModalVisibility(true)" />
		<base-modal clr="red" maxWidth="400px" ref="enterModal" title="Вход в систему">
			<login-form />
		</base-modal>
		<router-view />
	</div>
</template>

<style lang="scss">
@import 'global_styles/base';
#application {
	--accent: hsla(210, 52%, 34%, 1);
	--app-background: #edeef0;
	background-color: var(--app-background);
	min-height: 100vh;
}
</style>
