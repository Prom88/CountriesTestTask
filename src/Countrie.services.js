import Axios from 'axios'

const CountrieService = {
	async getAll() {
		const response = await Axios.get('https://restcountries.com/v3.1/all')
		return response
	},
	async getCountry(code) {
		const response = await Axios.get(
			`https://restcountries.com/v3.1/alpha/${code}`
		)
		return response
	},
}

export default CountrieService
