const addModalWindow = (button) => {
	const openButton = document.querySelector(button);
	const modalWindow = document.querySelector('.modal');

	openButton.addEventListener('click', () => {
		modalWindow.classList.add('open');
		document.body.classList.add('modal-open');
	});

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow) {
			modalWindow.classList.remove('open')
			document.body.classList.remove('modal-open');
		}
	})
};

export default addModalWindow;