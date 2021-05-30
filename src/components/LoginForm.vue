<script>
import BaseButton from './BaseButton.vue'
import useFieldsValidation from '@/use/fieldsValidation'
import { defineComponent } from 'vue'
import regexp from '@/util/regexp'

export default defineComponent({
	components: { BaseButton },
	name: 'LoginForm',
	setup() {
		const form = useFieldsValidation([
			{
				name: 'login',
				text: 'Логин:',
				placeholder: 'example@mail.net',
				regexp: regexp.loginValidation,
				value: '',
				type: 'text',
			},
			{
				name: 'password',
				text: 'Пароль:',
				placeholder: 'Введите пароль',
				regexp: regexp.passwordValidation,
				value: '',
				type: 'password',
			},
		])

		return { form }
	},
})
</script>

<template>
	<form class="login-form">
		<fieldset>
			<label v-for="field in form" :key="field.name"
				>{{ field.text }}
				<span class="input-wrapper">
					<input :id="field.name" v-model="field.value" :placeholder="field.placeholder" :type="field.type" />
					<span :style="{ color: field.color }" class="input-shadow"></span>
				</span>
			</label>
			<base-button fontSize="20px" @click.prevent>Войти</base-button>
		</fieldset>
	</form>
</template>

<style lang="scss">
.login-form {
	fieldset {
		border: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;

		button {
			margin-top: 10px;
		}
	}

	label {
		display: flex;
		width: 100%;
		flex-direction: column;
		padding: 3px;
		@include fluid-type(16px, 18px);

		.input-wrapper {
			position: relative;
			border-radius: 4px;
			margin-top: 2px;
		}

		.input-shadow {
			box-shadow: 2px 2px 1px 1px currentColor;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: -1;
			border-radius: 4px;
			transition: 0.2s;
		}

		input {
			margin-top: 4px;
			padding: 10px;
			border-radius: 4px;
			width: 100%;
			position: relative;
			margin-top: 0;
			background-color: #f4f4f485;
		}

		input:focus ~ .input-shadow {
			box-shadow: 0px 0px 0px 2px currentColor;
		}
	}

	button {
		margin-left: auto;
	}
}
</style>
