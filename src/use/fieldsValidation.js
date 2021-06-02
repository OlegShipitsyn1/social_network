import { computed, reactive } from 'vue'

const useFieldsValidation = (fieldsInitial) => {
	const isArray = Array.isArray(fieldsInitial)

	if (!isArray) {
		throw new Error('fields must be an array')
	}

	const statusColor = {
		neutral: 'rgba(0, 0, 0, 0.137)',
		success: '#46d688',
		danger: '#de3e3eb5',
	}

	const fields = reactive(fieldsInitial)

	const form = computed(() =>
		fields.map((field) => {
			field.isValid = field.regexp.test(field.value)
			if (!field.value.length) {
				field.color = statusColor.neutral
			} else {
				field.color = field.isValid ? statusColor.success : statusColor.danger
			}
			return field
		})
	)

	const isEveryFieldValid = computed(() => form.value.every((f) => f.isValid === true))

	return { form, isEveryFieldValid }
}

export default useFieldsValidation
