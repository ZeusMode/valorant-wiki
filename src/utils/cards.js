import restclient from './restclient'

export default class Cards {
	static get() {
		return restclient.get('/playercards')
	}
}