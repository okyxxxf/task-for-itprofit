import validateForm from "./validateForm";

const addActionToForm = (formSelector) => {
	const form = document.querySelector(formSelector);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		validateForm(form);
	});
};

export default addActionToForm;