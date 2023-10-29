const showError = (res) => {
	const responceBlock = document.querySelector('.responce');
	responceBlock.classList.add('error');
	responceBlock.classList.remove('success');
	responceBlock.innerText = res;
};

export default showError;