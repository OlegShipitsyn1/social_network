import { computed, reactive } from 'vue'

const useFieldsValidation = (fieldsInitial) => {
	const isArray = Array.isArray(fieldsInitial)

	if (!isArray) {
		throw new Error('fields must be an array')
	}

	const statusColor = {
		neutral: 'rgba(0, 0, 0, 0.137)',
		success: '#46d688',
		danger: '#d60808e8',
	}

	const fields = reactive(fieldsInitial)

	const validated = computed(() =>
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

	return validated
}

export default useFieldsValidation
