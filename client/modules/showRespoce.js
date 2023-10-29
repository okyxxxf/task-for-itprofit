const showResponce = (res, form) => {
	const responceBlock = document.querySelector('.responce');
	responceBlock.classList.remove('error');
	responceBlock.classList.add('success');
	responceBlock.innerText = res;

	const inputs = form.querySelectorAll('.input');
	inputs.forEach(input => input.value = '');
};

export default showResponce;