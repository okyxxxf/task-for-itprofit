import addMaskForPhone from "./addMaskForPhone";
import addActionToForm from "./addActionToForm";
import addModalWindow from "./addModalWindow";

window.onload = () => {
	addMaskForPhone('#phone');
	addActionToForm('.feedback__form');
	addModalWindow('.modal__button');
};