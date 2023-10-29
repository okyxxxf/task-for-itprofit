import register from "./register";
import validateForm from "./validateForm";
import getValues from "./getValues";
import showResponce from "./showRespoce";
import showError from "./showError";

const addActionToForm = (formSelector) => {
	const form = document.querySelector(formSelector);

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		if (validateForm(form)) {
			const values = getValues(form);
			const {status, message} = await register(values);
			if (status === 'success') return showResponce(message, form);
			return showError(message);
		}
	});
};

export default addActionToForm;