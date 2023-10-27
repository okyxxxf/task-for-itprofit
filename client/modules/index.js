import addMaskForPhone from "./addMaskForPhone";
import addActionToForm from "./addActionToForm";

window.onload = () => {
	addMaskForPhone('#phone');
	addActionToForm('.feedback__form');
};