import createPasswordRegex from 'password-regexp'
const passwordRegex = createPasswordRegex({
	min: 6,
	max: 18,
	numeric: false,
	uppercase: false,
	symbols: false,
})

const regexp = {
	loginValidation: new RegExp(/[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*/),
	passwordValidation: passwordRegex,
}

export default regexp
