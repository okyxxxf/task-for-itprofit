class registrationService {
	constructor() {
		this.baseUrl = 'http://localhost:9090';
	}

	register = async (body) => {
		const url = `${this.baseUrl}/api/registration`;

		const responce = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body)
		})

		return await responce.json();
	}
};

export default new registrationService().register;