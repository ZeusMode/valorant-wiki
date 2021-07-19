import restclient from './restclient'

export default class Weapons {
	static get() {
		return restclient.get('/weapons')
	}
}