const BASE_URL = 'https://valorant-api.com/v1'

const handleStatus = status => {
	switch (status) {
		case 404:
			throw new Error('Ops! O recurso que você tentou acessar não existe')
		case 500:
			throw new Error('Ops! Parece que algo deu errado')
		default:
			return null
	}
}

const makeRequest = async (url, options = { headers: {} }) => {
	const res = await fetch(BASE_URL + url)
	handleStatus(res.status)
	return res
}

export default class Restclient {
	static async get(url) {
		const res = await makeRequest(url)
		return res.json()
	}
}