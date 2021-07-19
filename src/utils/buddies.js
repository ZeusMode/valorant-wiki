import restclient from './restclient'

export default class Buddies {
	static get() {
		return restclient.get('/Buddies')
	}
}