import restclient from './restclient'

export default class Sprays {
	static get() {
		return restclient.get('/sprays')
	}
}