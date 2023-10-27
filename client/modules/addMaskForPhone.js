import Cleave from "cleave.js";
import 'cleave.js/dist/addons/cleave-phone.by';

const addMaskForPhone = (selector) => {
	const mask = new Cleave(selector, {
		phone: true,
    phoneRegionCode: 'BY',
	});
};

export default addMaskForPhone;