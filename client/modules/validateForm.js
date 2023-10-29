const validateForm = (form) => {
	const inputs = form.querySelectorAll('.input');
	const isValid = [false, false, false, false];

	const errorMessages = [
		'Имя содержит не допустимые символы или его длина не соответсвует',
		'Некорректный email',
		'Некоректный номер телефона',
		'Сообщение содержит не допустимые символы или его длина не соответсвует',
	];

	const templates = [
		/[a-zA-Z]{4,20}/, // имя в длиной от 4 до 20 символов
		/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/, // email адрес
		/(\+375||80)\s[0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}/, // 12 цифр, так как это телефон
		/[a-zA-ZА-Яа-я0-9]+/ // Сообщение, проверка что там есть хоть что то
	];

	const errors = document.querySelectorAll('.error__label');
	errors.forEach(div => div.remove());

	inputs.forEach((input, i) => {
		if (!templates[i].test(input.value)) {
			input.classList.add('error');

			const errorElement = document.createElement('div');
			errorElement.innerText = errorMessages[i];
			errorElement.className = 'label error__label'

			input.addEventListener('click', () => {
				input.classList.remove('error');
				errorElement.remove();
			});

			input.after(errorElement);
		} else {
			isValid[i] = true;
		}
	});

	return isValid.every(value => value == true) ? true : false;
};

export default validateForm;